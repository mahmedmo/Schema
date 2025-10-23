import React, { useEffect, useState } from "react";
import "./SplashScreen.scss";

export const SplashScreen: React.FC<{ onComplete: () => void }> = ({
  onComplete,
}) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Schema";
  const typingSpeed = 150; // milliseconds per character

  useEffect(() => {
    let currentIndex = 0;

    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        // Wait a bit after typing completes, then fade out
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(onComplete, 500);
        }, 300);
      }
    }, typingSpeed);

    return () => clearInterval(typeInterval);
  }, [onComplete]);

  return (
    <div className={`SplashScreen ${fadeOut ? "SplashScreen--fadeOut" : ""}`}>
      <div className="SplashScreen__content">
        <h1 className="SplashScreen__title">
          {displayedText}
          <span className="SplashScreen__cursor">|</span>
        </h1>
      </div>
    </div>
  );
};
