var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../scripts/woff2/woff2-vite-plugins.js
var require_woff2_vite_plugins = __commonJS({
  "../scripts/woff2/woff2-vite-plugins.js"(exports, module) {
    "use strict";
    var OSS_FONTS_CDN = "https://excalidraw.nyc3.cdn.digitaloceanspaces.com/oss/";
    var OSS_FONTS_FALLBACK = "/";
    module.exports.woff2BrowserPlugin = () => {
      let isDev;
      return {
        name: "woff2BrowserPlugin",
        enforce: "pre",
        config(_, { command }) {
          isDev = command === "serve";
        },
        transform(code, id) {
          if (!isDev && id.endsWith("/excalidraw/fonts/fonts.css")) {
            return `/* WARN: The following content is generated during excalidraw-app build */

      @font-face {
        font-family: "Assistant";
        src: url(${OSS_FONTS_CDN}fonts/Assistant/Assistant-Regular.woff2)
            format("woff2"),
          url(./Assistant-Regular.woff2) format("woff2");
        font-weight: 400;
        style: normal;
        display: swap;
      }

      @font-face {
        font-family: "Assistant";
        src: url(${OSS_FONTS_CDN}fonts/Assistant/Assistant-Medium.woff2)
            format("woff2"),
          url(./Assistant-Medium.woff2) format("woff2");
        font-weight: 500;
        style: normal;
        display: swap;
      }

      @font-face {
        font-family: "Assistant";
        src: url(${OSS_FONTS_CDN}fonts/Assistant/Assistant-SemiBold.woff2)
            format("woff2"),
          url(./Assistant-SemiBold.woff2) format("woff2");
        font-weight: 600;
        style: normal;
        display: swap;
      }

      @font-face {
        font-family: "Assistant";
        src: url(${OSS_FONTS_CDN}fonts/Assistant/Assistant-Bold.woff2)
            format("woff2"),
          url(./Assistant-Bold.woff2) format("woff2");
        font-weight: 700;
        style: normal;
        display: swap;
      }`;
          }
          if (!isDev && id.endsWith("excalidraw-app/index.html")) {
            return code.replace(
              "<!-- PLACEHOLDER:EXCALIDRAW_APP_FONTS -->",
              `<script>
        // point into our CDN in prod, fallback to root (excalidraw.com) domain in case of issues
        window.EXCALIDRAW_ASSET_PATH = [
          "${OSS_FONTS_CDN}",
          "${OSS_FONTS_FALLBACK}",
        ];
      </script>

      <!-- Preload all default fonts to avoid swap on init -->
      <link
        rel="preload"
        href="${OSS_FONTS_CDN}fonts/Excalifont/Excalifont-Regular-a88b72a24fb54c9f94e3b5fdaa7481c9.woff2"
        as="font"
        type="font/woff2"
        crossorigin="anonymous"
      />
      <!-- For Nunito only preload the latin range, which should be good enough for now -->
      <link
        rel="preload"
        href="${OSS_FONTS_CDN}fonts/Nunito/Nunito-Regular-XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTQ3j6zbXWjgeg.woff2"
        as="font"
        type="font/woff2"
        crossorigin="anonymous"
      />
      <link
        rel="preload"
        href="${OSS_FONTS_CDN}fonts/ComicShanns/ComicShanns-Regular-279a7b317d12eb88de06167bd672b4b4.woff2"
        as="font"
        type="font/woff2"
        crossorigin="anonymous"
      />
    `
            );
          }
        }
      };
    };
  }
});

// vite.config.mts
var import_woff2_vite_plugins = __toESM(require_woff2_vite_plugins(), 1);
import path from "path";
import { defineConfig, loadEnv } from "file:///Users/crimson/dev/whiteboard/node_modules/vite/dist/node/index.js";
import react from "file:///Users/crimson/dev/whiteboard/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgrPlugin from "file:///Users/crimson/dev/whiteboard/node_modules/vite-plugin-svgr/dist/index.js";
import { ViteEjsPlugin } from "file:///Users/crimson/dev/whiteboard/node_modules/vite-plugin-ejs/index.js";
import { VitePWA } from "file:///Users/crimson/dev/whiteboard/node_modules/vite-plugin-pwa/dist/index.js";
import checker from "file:///Users/crimson/dev/whiteboard/node_modules/vite-plugin-checker/dist/esm/main.js";
import { createHtmlPlugin } from "file:///Users/crimson/dev/whiteboard/node_modules/vite-plugin-html/dist/index.mjs";
import Sitemap from "file:///Users/crimson/dev/whiteboard/node_modules/vite-plugin-sitemap/dist/index.js";
var __vite_injected_original_dirname = "/Users/crimson/dev/whiteboard/schema-app";
var vite_config_default = defineConfig(({ mode }) => {
  const envVars = loadEnv(mode, `../`);
  return {
    base: "./",
    server: {
      port: Number(envVars.VITE_APP_PORT || 3e3),
      // open the browser
      open: true
    },
    // We need to specify the envDir since now there are no
    //more located in parallel with the vite.config.ts file but in parent dir
    envDir: "../",
    resolve: {
      alias: [
        {
          find: /^schema-app\/(.*)/,
          replacement: path.resolve(__vite_injected_original_dirname, "./$1")
        },
        {
          find: /^@whiteboard\/common$/,
          replacement: path.resolve(
            __vite_injected_original_dirname,
            "../packages/common/src/index.ts"
          )
        },
        {
          find: /^@whiteboard\/common\/(.*?)/,
          replacement: path.resolve(__vite_injected_original_dirname, "../packages/common/src/$1")
        },
        {
          find: /^@excalidraw\/common$/,
          replacement: path.resolve(
            __vite_injected_original_dirname,
            "../packages/common/src/index.ts"
          )
        },
        {
          find: /^@excalidraw\/common\/(.*?)/,
          replacement: path.resolve(__vite_injected_original_dirname, "../packages/common/src/$1")
        },
        {
          find: /^@whiteboard\/element$/,
          replacement: path.resolve(
            __vite_injected_original_dirname,
            "../packages/element/src/index.ts"
          )
        },
        {
          find: /^@whiteboard\/element\/(.*?)/,
          replacement: path.resolve(__vite_injected_original_dirname, "../packages/element/src/$1")
        },
        {
          find: /^@excalidraw\/element$/,
          replacement: path.resolve(
            __vite_injected_original_dirname,
            "../packages/element/src/index.ts"
          )
        },
        {
          find: /^@excalidraw\/element\/(.*?)/,
          replacement: path.resolve(__vite_injected_original_dirname, "../packages/element/src/$1")
        },
        {
          find: /^@whiteboard\/whiteboard$/,
          replacement: path.resolve(
            __vite_injected_original_dirname,
            "../packages/excalidraw/index.tsx"
          )
        },
        {
          find: /^@whiteboard\/whiteboard\/(.*?)/,
          replacement: path.resolve(__vite_injected_original_dirname, "../packages/excalidraw/$1")
        },
        {
          find: /^@excalidraw\/excalidraw$/,
          replacement: path.resolve(
            __vite_injected_original_dirname,
            "../packages/excalidraw/index.tsx"
          )
        },
        {
          find: /^@excalidraw\/excalidraw\/(.*?)/,
          replacement: path.resolve(__vite_injected_original_dirname, "../packages/excalidraw/$1")
        },
        {
          find: /^@whiteboard\/math$/,
          replacement: path.resolve(__vite_injected_original_dirname, "../packages/math/src/index.ts")
        },
        {
          find: /^@whiteboard\/math\/(.*?)/,
          replacement: path.resolve(__vite_injected_original_dirname, "../packages/math/src/$1")
        },
        {
          find: /^@excalidraw\/math$/,
          replacement: path.resolve(__vite_injected_original_dirname, "../packages/math/src/index.ts")
        },
        {
          find: /^@excalidraw\/math\/(.*?)/,
          replacement: path.resolve(__vite_injected_original_dirname, "../packages/math/src/$1")
        },
        {
          find: /^@excalidraw\/utils$/,
          replacement: path.resolve(
            __vite_injected_original_dirname,
            "../packages/utils/src/index.ts"
          )
        },
        {
          find: /^@excalidraw\/utils\/(.*?)/,
          replacement: path.resolve(__vite_injected_original_dirname, "../packages/utils/src/$1")
        }
      ]
    },
    build: {
      outDir: "build",
      rollupOptions: {
        output: {
          assetFileNames(chunkInfo) {
            if (chunkInfo?.name?.endsWith(".woff2")) {
              const family = chunkInfo.name.split("-")[0];
              return `fonts/${family}/[name][extname]`;
            }
            return "assets/[name]-[hash][extname]";
          },
          // Creating separate chunk for locales except for en and percentages.json so they
          // can be cached at runtime and not merged with
          // app precache. en.json and percentages.json are needed for first load
          // or fallback hence not clubbing with locales so first load followed by offline mode works fine. This is how CRA used to work too.
          manualChunks(id) {
            if (id.includes("packages/excalidraw/locales") && id.match(/en.json|percentages.json/) === null) {
              const index = id.indexOf("locales/");
              return `locales/${id.substring(index + 8)}`;
            }
          }
        }
      },
      sourcemap: true,
      // don't auto-inline small assets (i.e. fonts hosted on CDN)
      assetsInlineLimit: 0
    },
    plugins: [
      Sitemap({
        hostname: "http://localhost",
        outDir: "build",
        changefreq: "monthly",
        // its static in public folder
        generateRobotsTxt: false
      }),
      (0, import_woff2_vite_plugins.woff2BrowserPlugin)(),
      react(),
      checker({
        typescript: true,
        eslint: envVars.VITE_APP_ENABLE_ESLINT === "false" ? void 0 : { lintCommand: 'eslint "./**/*.{js,ts,tsx}"' },
        overlay: {
          initialIsOpen: envVars.VITE_APP_COLLAPSE_OVERLAY === "false",
          badgeStyle: "margin-bottom: 4rem; margin-left: 1rem"
        }
      }),
      svgrPlugin(),
      ViteEjsPlugin(),
      VitePWA({
        registerType: "autoUpdate",
        devOptions: {
          /* set this flag to true to enable in Development mode */
          enabled: envVars.VITE_APP_ENABLE_PWA === "true"
        },
        workbox: {
          // don't precache fonts, locales and separate chunks
          globIgnores: [
            "fonts.css",
            "**/locales/**",
            "service-worker.js",
            "**/*.chunk-*.js"
          ],
          runtimeCaching: [
            {
              urlPattern: new RegExp(".+.woff2"),
              handler: "CacheFirst",
              options: {
                cacheName: "fonts",
                expiration: {
                  maxEntries: 1e3,
                  maxAgeSeconds: 60 * 60 * 24 * 90
                  // 90 days
                },
                cacheableResponse: {
                  // 0 to cache "opaque" responses from cross-origin requests (i.e. CDN)
                  statuses: [0, 200]
                }
              }
            },
            {
              urlPattern: new RegExp("fonts.css"),
              handler: "StaleWhileRevalidate",
              options: {
                cacheName: "fonts",
                expiration: {
                  maxEntries: 50
                }
              }
            },
            {
              urlPattern: new RegExp("locales/[^/]+.js"),
              handler: "CacheFirst",
              options: {
                cacheName: "locales",
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 60 * 60 * 24 * 30
                  // <== 30 days
                }
              }
            },
            {
              urlPattern: new RegExp(".chunk-.+.js"),
              handler: "CacheFirst",
              options: {
                cacheName: "chunk",
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 60 * 60 * 24 * 90
                  // <== 90 days
                }
              }
            }
          ]
        },
        manifest: {
          short_name: "Schema",
          name: "Schema",
          description: "A minimalist drawing tool for sketching and diagramming.",
          icons: [
            {
              src: "android-chrome-192x192.png",
              sizes: "192x192",
              type: "image/png"
            },
            {
              src: "apple-touch-icon.png",
              type: "image/png",
              sizes: "180x180"
            },
            {
              src: "favicon-32x32.png",
              sizes: "32x32",
              type: "image/png"
            },
            {
              src: "favicon-16x16.png",
              sizes: "16x16",
              type: "image/png"
            }
          ],
          start_url: "/",
          id: "whiteboard",
          display: "standalone",
          theme_color: "#121212",
          background_color: "#ffffff",
          file_handlers: [
            {
              action: "/",
              accept: {
                "application/vnd.excalidraw+json": [".excalidraw"]
              }
            }
          ],
          share_target: {
            action: "/web-share-target",
            method: "POST",
            enctype: "multipart/form-data",
            params: {
              files: [
                {
                  name: "file",
                  accept: [
                    "application/vnd.excalidraw+json",
                    "application/json",
                    ".excalidraw"
                  ]
                }
              ]
            }
          },
          screenshots: [
            {
              src: "/screenshots/virtual-whiteboard.png",
              type: "image/png",
              sizes: "462x945"
            },
            {
              src: "/screenshots/wireframe.png",
              type: "image/png",
              sizes: "462x945"
            },
            {
              src: "/screenshots/illustration.png",
              type: "image/png",
              sizes: "462x945"
            },
            {
              src: "/screenshots/shapes.png",
              type: "image/png",
              sizes: "462x945"
            },
            {
              src: "/screenshots/collaboration.png",
              type: "image/png",
              sizes: "462x945"
            },
            {
              src: "/screenshots/export.png",
              type: "image/png",
              sizes: "462x945"
            }
          ]
        }
      }),
      createHtmlPlugin({
        minify: true
      })
    ],
    publicDir: "../public"
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc2NyaXB0cy93b2ZmMi93b2ZmMi12aXRlLXBsdWdpbnMuanMiLCAidml0ZS5jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2NyaW1zb24vZGV2L3doaXRlYm9hcmQvc2NyaXB0cy93b2ZmMlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2NyaW1zb24vZGV2L3doaXRlYm9hcmQvc2NyaXB0cy93b2ZmMi93b2ZmMi12aXRlLXBsdWdpbnMuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2NyaW1zb24vZGV2L3doaXRlYm9hcmQvc2NyaXB0cy93b2ZmMi93b2ZmMi12aXRlLXBsdWdpbnMuanNcIjsvLyBkZWZpbmUgYEVYQ0FMSURSQVdfQVNTRVRfUEFUSGAgYXMgYSBTU09UXG5jb25zdCBPU1NfRk9OVFNfQ0ROID0gXCJodHRwczovL2V4Y2FsaWRyYXcubnljMy5jZG4uZGlnaXRhbG9jZWFuc3BhY2VzLmNvbS9vc3MvXCI7XG5jb25zdCBPU1NfRk9OVFNfRkFMTEJBQ0sgPSBcIi9cIjtcblxuLyoqXG4gKiBDdXN0b20gdml0ZSBwbHVnaW4gZm9yIGF1dG8tcHJlZml4aW5nIGBFWENBTElEUkFXX0FTU0VUX1BBVEhgIHdvZmYyIGZvbnRzIGluIGBleGNhbGlkcmF3LWFwcGAuXG4gKlxuICogQHJldHVybnMge2ltcG9ydChcInZpdGVcIikuUGx1Z2luT3B0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cy53b2ZmMkJyb3dzZXJQbHVnaW4gPSAoKSA9PiB7XG4gIGxldCBpc0RldjtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6IFwid29mZjJCcm93c2VyUGx1Z2luXCIsXG4gICAgZW5mb3JjZTogXCJwcmVcIixcbiAgICBjb25maWcoXywgeyBjb21tYW5kIH0pIHtcbiAgICAgIGlzRGV2ID0gY29tbWFuZCA9PT0gXCJzZXJ2ZVwiO1xuICAgIH0sXG4gICAgdHJhbnNmb3JtKGNvZGUsIGlkKSB7XG4gICAgICAvLyB1c2luZyBjb3B5IC8gcmVwbGFjZSBhcyBmb250cyBkZWZpbmVkIGluIHRoZSBgLmNzc2AgZG9uJ3QgaGF2ZSB0byBiZSBtYW51YWxseSBjb3BpZWQgb3ZlciAodml0ZS9yb2xsdXAgZG9lcyB0aGlzIGF1dG9tYXRpY2FsbHkpLFxuICAgICAgLy8gYnV0IGF0IHRoZSBzYW1lIHRpbWUgY2FuJ3QgYmUgZWFzaWx5IHByZWZpeGVkIHdpdGggdGhlIGBFWENBTElEUkFXX0FTU0VUX1BBVEhgIG9ubHkgZm9yIHRoZSBgZXhjYWxpZHJhdy1hcHBgXG4gICAgICBpZiAoIWlzRGV2ICYmIGlkLmVuZHNXaXRoKFwiL2V4Y2FsaWRyYXcvZm9udHMvZm9udHMuY3NzXCIpKSB7XG4gICAgICAgIHJldHVybiBgLyogV0FSTjogVGhlIGZvbGxvd2luZyBjb250ZW50IGlzIGdlbmVyYXRlZCBkdXJpbmcgZXhjYWxpZHJhdy1hcHAgYnVpbGQgKi9cblxuICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudFwiO1xuICAgICAgICBzcmM6IHVybCgke09TU19GT05UU19DRE59Zm9udHMvQXNzaXN0YW50L0Fzc2lzdGFudC1SZWd1bGFyLndvZmYyKVxuICAgICAgICAgICAgZm9ybWF0KFwid29mZjJcIiksXG4gICAgICAgICAgdXJsKC4vQXNzaXN0YW50LVJlZ3VsYXIud29mZjIpIGZvcm1hdChcIndvZmYyXCIpO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBzdHlsZTogbm9ybWFsO1xuICAgICAgICBkaXNwbGF5OiBzd2FwO1xuICAgICAgfVxuXG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50XCI7XG4gICAgICAgIHNyYzogdXJsKCR7T1NTX0ZPTlRTX0NETn1mb250cy9Bc3Npc3RhbnQvQXNzaXN0YW50LU1lZGl1bS53b2ZmMilcbiAgICAgICAgICAgIGZvcm1hdChcIndvZmYyXCIpLFxuICAgICAgICAgIHVybCguL0Fzc2lzdGFudC1NZWRpdW0ud29mZjIpIGZvcm1hdChcIndvZmYyXCIpO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBzdHlsZTogbm9ybWFsO1xuICAgICAgICBkaXNwbGF5OiBzd2FwO1xuICAgICAgfVxuXG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50XCI7XG4gICAgICAgIHNyYzogdXJsKCR7T1NTX0ZPTlRTX0NETn1mb250cy9Bc3Npc3RhbnQvQXNzaXN0YW50LVNlbWlCb2xkLndvZmYyKVxuICAgICAgICAgICAgZm9ybWF0KFwid29mZjJcIiksXG4gICAgICAgICAgdXJsKC4vQXNzaXN0YW50LVNlbWlCb2xkLndvZmYyKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZGlzcGxheTogc3dhcDtcbiAgICAgIH1cblxuICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudFwiO1xuICAgICAgICBzcmM6IHVybCgke09TU19GT05UU19DRE59Zm9udHMvQXNzaXN0YW50L0Fzc2lzdGFudC1Cb2xkLndvZmYyKVxuICAgICAgICAgICAgZm9ybWF0KFwid29mZjJcIiksXG4gICAgICAgICAgdXJsKC4vQXNzaXN0YW50LUJvbGQud29mZjIpIGZvcm1hdChcIndvZmYyXCIpO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBzdHlsZTogbm9ybWFsO1xuICAgICAgICBkaXNwbGF5OiBzd2FwO1xuICAgICAgfWA7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNEZXYgJiYgaWQuZW5kc1dpdGgoXCJleGNhbGlkcmF3LWFwcC9pbmRleC5odG1sXCIpKSB7XG4gICAgICAgIHJldHVybiBjb2RlLnJlcGxhY2UoXG4gICAgICAgICAgXCI8IS0tIFBMQUNFSE9MREVSOkVYQ0FMSURSQVdfQVBQX0ZPTlRTIC0tPlwiLFxuICAgICAgICAgIGA8c2NyaXB0PlxuICAgICAgICAvLyBwb2ludCBpbnRvIG91ciBDRE4gaW4gcHJvZCwgZmFsbGJhY2sgdG8gcm9vdCAoZXhjYWxpZHJhdy5jb20pIGRvbWFpbiBpbiBjYXNlIG9mIGlzc3Vlc1xuICAgICAgICB3aW5kb3cuRVhDQUxJRFJBV19BU1NFVF9QQVRIID0gW1xuICAgICAgICAgIFwiJHtPU1NfRk9OVFNfQ0ROfVwiLFxuICAgICAgICAgIFwiJHtPU1NfRk9OVFNfRkFMTEJBQ0t9XCIsXG4gICAgICAgIF07XG4gICAgICA8L3NjcmlwdD5cblxuICAgICAgPCEtLSBQcmVsb2FkIGFsbCBkZWZhdWx0IGZvbnRzIHRvIGF2b2lkIHN3YXAgb24gaW5pdCAtLT5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICBocmVmPVwiJHtPU1NfRk9OVFNfQ0ROfWZvbnRzL0V4Y2FsaWZvbnQvRXhjYWxpZm9udC1SZWd1bGFyLWE4OGI3MmEyNGZiNTRjOWY5NGUzYjVmZGFhNzQ4MWM5LndvZmYyXCJcbiAgICAgICAgYXM9XCJmb250XCJcbiAgICAgICAgdHlwZT1cImZvbnQvd29mZjJcIlxuICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXG4gICAgICAvPlxuICAgICAgPCEtLSBGb3IgTnVuaXRvIG9ubHkgcHJlbG9hZCB0aGUgbGF0aW4gcmFuZ2UsIHdoaWNoIHNob3VsZCBiZSBnb29kIGVub3VnaCBmb3Igbm93IC0tPlxuICAgICAgPGxpbmtcbiAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgIGhyZWY9XCIke09TU19GT05UU19DRE59Zm9udHMvTnVuaXRvL051bml0by1SZWd1bGFyLVhSWEkzSTZMaTAxQktvZmlPYzV3dGxaMmRpOEhESWtoZFRRM2o2emJYV2pnZWcud29mZjJcIlxuICAgICAgICBhcz1cImZvbnRcIlxuICAgICAgICB0eXBlPVwiZm9udC93b2ZmMlwiXG4gICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgIC8+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgaHJlZj1cIiR7T1NTX0ZPTlRTX0NETn1mb250cy9Db21pY1NoYW5ucy9Db21pY1NoYW5ucy1SZWd1bGFyLTI3OWE3YjMxN2QxMmViODhkZTA2MTY3YmQ2NzJiNGI0LndvZmYyXCJcbiAgICAgICAgYXM9XCJmb250XCJcbiAgICAgICAgdHlwZT1cImZvbnQvd29mZjJcIlxuICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXG4gICAgICAvPlxuICAgIGAsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn07XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9jcmltc29uL2Rldi93aGl0ZWJvYXJkL3NjaGVtYS1hcHBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9jcmltc29uL2Rldi93aGl0ZWJvYXJkL3NjaGVtYS1hcHAvdml0ZS5jb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9jcmltc29uL2Rldi93aGl0ZWJvYXJkL3NjaGVtYS1hcHAvdml0ZS5jb25maWcubXRzXCI7aW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgc3ZnclBsdWdpbiBmcm9tIFwidml0ZS1wbHVnaW4tc3ZnclwiO1xuaW1wb3J0IHsgVml0ZUVqc1BsdWdpbiB9IGZyb20gXCJ2aXRlLXBsdWdpbi1lanNcIjtcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tIFwidml0ZS1wbHVnaW4tcHdhXCI7XG5pbXBvcnQgY2hlY2tlciBmcm9tIFwidml0ZS1wbHVnaW4tY2hlY2tlclwiO1xuaW1wb3J0IHsgY3JlYXRlSHRtbFBsdWdpbiB9IGZyb20gXCJ2aXRlLXBsdWdpbi1odG1sXCI7XG5pbXBvcnQgU2l0ZW1hcCBmcm9tIFwidml0ZS1wbHVnaW4tc2l0ZW1hcFwiO1xuaW1wb3J0IHsgd29mZjJCcm93c2VyUGx1Z2luIH0gZnJvbSBcIi4uL3NjcmlwdHMvd29mZjIvd29mZjItdml0ZS1wbHVnaW5zXCI7XG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG4gIC8vIFRvIGxvYWQgLmVudiB2YXJpYWJsZXNcbiAgY29uc3QgZW52VmFycyA9IGxvYWRFbnYobW9kZSwgYC4uL2ApO1xuICAvLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuICByZXR1cm4ge1xuICAgIGJhc2U6IFwiLi9cIixcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIHBvcnQ6IE51bWJlcihlbnZWYXJzLlZJVEVfQVBQX1BPUlQgfHwgMzAwMCksXG4gICAgICAvLyBvcGVuIHRoZSBicm93c2VyXG4gICAgICBvcGVuOiB0cnVlLFxuICAgIH0sXG4gICAgLy8gV2UgbmVlZCB0byBzcGVjaWZ5IHRoZSBlbnZEaXIgc2luY2Ugbm93IHRoZXJlIGFyZSBub1xuICAgIC8vbW9yZSBsb2NhdGVkIGluIHBhcmFsbGVsIHdpdGggdGhlIHZpdGUuY29uZmlnLnRzIGZpbGUgYnV0IGluIHBhcmVudCBkaXJcbiAgICBlbnZEaXI6IFwiLi4vXCIsXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGZpbmQ6IC9ec2NoZW1hLWFwcFxcLyguKikvLFxuICAgICAgICAgIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vJDFcIiksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaW5kOiAvXkB3aGl0ZWJvYXJkXFwvY29tbW9uJC8sXG4gICAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShcbiAgICAgICAgICAgIF9fZGlybmFtZSxcbiAgICAgICAgICAgIFwiLi4vcGFja2FnZXMvY29tbW9uL3NyYy9pbmRleC50c1wiLFxuICAgICAgICAgICksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaW5kOiAvXkB3aGl0ZWJvYXJkXFwvY29tbW9uXFwvKC4qPykvLFxuICAgICAgICAgIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvJDFcIiksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaW5kOiAvXkBleGNhbGlkcmF3XFwvY29tbW9uJC8sXG4gICAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShcbiAgICAgICAgICAgIF9fZGlybmFtZSxcbiAgICAgICAgICAgIFwiLi4vcGFja2FnZXMvY29tbW9uL3NyYy9pbmRleC50c1wiLFxuICAgICAgICAgICksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaW5kOiAvXkBleGNhbGlkcmF3XFwvY29tbW9uXFwvKC4qPykvLFxuICAgICAgICAgIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvJDFcIiksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaW5kOiAvXkB3aGl0ZWJvYXJkXFwvZWxlbWVudCQvLFxuICAgICAgICAgIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoXG4gICAgICAgICAgICBfX2Rpcm5hbWUsXG4gICAgICAgICAgICBcIi4uL3BhY2thZ2VzL2VsZW1lbnQvc3JjL2luZGV4LnRzXCIsXG4gICAgICAgICAgKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpbmQ6IC9eQHdoaXRlYm9hcmRcXC9lbGVtZW50XFwvKC4qPykvLFxuICAgICAgICAgIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4uL3BhY2thZ2VzL2VsZW1lbnQvc3JjLyQxXCIpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmluZDogL15AZXhjYWxpZHJhd1xcL2VsZW1lbnQkLyxcbiAgICAgICAgICByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKFxuICAgICAgICAgICAgX19kaXJuYW1lLFxuICAgICAgICAgICAgXCIuLi9wYWNrYWdlcy9lbGVtZW50L3NyYy9pbmRleC50c1wiLFxuICAgICAgICAgICksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaW5kOiAvXkBleGNhbGlkcmF3XFwvZWxlbWVudFxcLyguKj8pLyxcbiAgICAgICAgICByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuLi9wYWNrYWdlcy9lbGVtZW50L3NyYy8kMVwiKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpbmQ6IC9eQHdoaXRlYm9hcmRcXC93aGl0ZWJvYXJkJC8sXG4gICAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShcbiAgICAgICAgICAgIF9fZGlybmFtZSxcbiAgICAgICAgICAgIFwiLi4vcGFja2FnZXMvZXhjYWxpZHJhdy9pbmRleC50c3hcIixcbiAgICAgICAgICApLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmluZDogL15Ad2hpdGVib2FyZFxcL3doaXRlYm9hcmRcXC8oLio/KS8sXG4gICAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi4vcGFja2FnZXMvZXhjYWxpZHJhdy8kMVwiKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpbmQ6IC9eQGV4Y2FsaWRyYXdcXC9leGNhbGlkcmF3JC8sXG4gICAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShcbiAgICAgICAgICAgIF9fZGlybmFtZSxcbiAgICAgICAgICAgIFwiLi4vcGFja2FnZXMvZXhjYWxpZHJhdy9pbmRleC50c3hcIixcbiAgICAgICAgICApLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmluZDogL15AZXhjYWxpZHJhd1xcL2V4Y2FsaWRyYXdcXC8oLio/KS8sXG4gICAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi4vcGFja2FnZXMvZXhjYWxpZHJhdy8kMVwiKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpbmQ6IC9eQHdoaXRlYm9hcmRcXC9tYXRoJC8sXG4gICAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi4vcGFja2FnZXMvbWF0aC9zcmMvaW5kZXgudHNcIiksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaW5kOiAvXkB3aGl0ZWJvYXJkXFwvbWF0aFxcLyguKj8pLyxcbiAgICAgICAgICByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuLi9wYWNrYWdlcy9tYXRoL3NyYy8kMVwiKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpbmQ6IC9eQGV4Y2FsaWRyYXdcXC9tYXRoJC8sXG4gICAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi4vcGFja2FnZXMvbWF0aC9zcmMvaW5kZXgudHNcIiksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaW5kOiAvXkBleGNhbGlkcmF3XFwvbWF0aFxcLyguKj8pLyxcbiAgICAgICAgICByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuLi9wYWNrYWdlcy9tYXRoL3NyYy8kMVwiKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpbmQ6IC9eQGV4Y2FsaWRyYXdcXC91dGlscyQvLFxuICAgICAgICAgIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoXG4gICAgICAgICAgICBfX2Rpcm5hbWUsXG4gICAgICAgICAgICBcIi4uL3BhY2thZ2VzL3V0aWxzL3NyYy9pbmRleC50c1wiLFxuICAgICAgICAgICksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaW5kOiAvXkBleGNhbGlkcmF3XFwvdXRpbHNcXC8oLio/KS8sXG4gICAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi4vcGFja2FnZXMvdXRpbHMvc3JjLyQxXCIpLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIGJ1aWxkOiB7XG4gICAgICBvdXREaXI6IFwiYnVpbGRcIixcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgYXNzZXRGaWxlTmFtZXMoY2h1bmtJbmZvKSB7XG4gICAgICAgICAgICBpZiAoY2h1bmtJbmZvPy5uYW1lPy5lbmRzV2l0aChcIi53b2ZmMlwiKSkge1xuICAgICAgICAgICAgICBjb25zdCBmYW1pbHkgPSBjaHVua0luZm8ubmFtZS5zcGxpdChcIi1cIilbMF07XG4gICAgICAgICAgICAgIHJldHVybiBgZm9udHMvJHtmYW1pbHl9L1tuYW1lXVtleHRuYW1lXWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBcImFzc2V0cy9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdXCI7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAvLyBDcmVhdGluZyBzZXBhcmF0ZSBjaHVuayBmb3IgbG9jYWxlcyBleGNlcHQgZm9yIGVuIGFuZCBwZXJjZW50YWdlcy5qc29uIHNvIHRoZXlcbiAgICAgICAgICAvLyBjYW4gYmUgY2FjaGVkIGF0IHJ1bnRpbWUgYW5kIG5vdCBtZXJnZWQgd2l0aFxuICAgICAgICAgIC8vIGFwcCBwcmVjYWNoZS4gZW4uanNvbiBhbmQgcGVyY2VudGFnZXMuanNvbiBhcmUgbmVlZGVkIGZvciBmaXJzdCBsb2FkXG4gICAgICAgICAgLy8gb3IgZmFsbGJhY2sgaGVuY2Ugbm90IGNsdWJiaW5nIHdpdGggbG9jYWxlcyBzbyBmaXJzdCBsb2FkIGZvbGxvd2VkIGJ5IG9mZmxpbmUgbW9kZSB3b3JrcyBmaW5lLiBUaGlzIGlzIGhvdyBDUkEgdXNlZCB0byB3b3JrIHRvby5cbiAgICAgICAgICBtYW51YWxDaHVua3MoaWQpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgaWQuaW5jbHVkZXMoXCJwYWNrYWdlcy9leGNhbGlkcmF3L2xvY2FsZXNcIikgJiZcbiAgICAgICAgICAgICAgaWQubWF0Y2goL2VuLmpzb258cGVyY2VudGFnZXMuanNvbi8pID09PSBudWxsXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpZC5pbmRleE9mKFwibG9jYWxlcy9cIik7XG4gICAgICAgICAgICAgIC8vIFRha2luZyB0aGUgc3Vic3RyaW5nIGFmdGVyIFwibG9jYWxlcy9cIlxuICAgICAgICAgICAgICByZXR1cm4gYGxvY2FsZXMvJHtpZC5zdWJzdHJpbmcoaW5kZXggKyA4KX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgc291cmNlbWFwOiB0cnVlLFxuICAgICAgLy8gZG9uJ3QgYXV0by1pbmxpbmUgc21hbGwgYXNzZXRzIChpLmUuIGZvbnRzIGhvc3RlZCBvbiBDRE4pXG4gICAgICBhc3NldHNJbmxpbmVMaW1pdDogMCxcbiAgICB9LFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIFNpdGVtYXAoe1xuICAgICAgICBob3N0bmFtZTogXCJodHRwOi8vbG9jYWxob3N0XCIsXG4gICAgICAgIG91dERpcjogXCJidWlsZFwiLFxuICAgICAgICBjaGFuZ2VmcmVxOiBcIm1vbnRobHlcIixcbiAgICAgICAgLy8gaXRzIHN0YXRpYyBpbiBwdWJsaWMgZm9sZGVyXG4gICAgICAgIGdlbmVyYXRlUm9ib3RzVHh0OiBmYWxzZSxcbiAgICAgIH0pLFxuICAgICAgd29mZjJCcm93c2VyUGx1Z2luKCksXG4gICAgICByZWFjdCgpLFxuICAgICAgY2hlY2tlcih7XG4gICAgICAgIHR5cGVzY3JpcHQ6IHRydWUsXG4gICAgICAgIGVzbGludDpcbiAgICAgICAgICBlbnZWYXJzLlZJVEVfQVBQX0VOQUJMRV9FU0xJTlQgPT09IFwiZmFsc2VcIlxuICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgIDogeyBsaW50Q29tbWFuZDogJ2VzbGludCBcIi4vKiovKi57anMsdHMsdHN4fVwiJyB9LFxuICAgICAgICBvdmVybGF5OiB7XG4gICAgICAgICAgaW5pdGlhbElzT3BlbjogZW52VmFycy5WSVRFX0FQUF9DT0xMQVBTRV9PVkVSTEFZID09PSBcImZhbHNlXCIsXG4gICAgICAgICAgYmFkZ2VTdHlsZTogXCJtYXJnaW4tYm90dG9tOiA0cmVtOyBtYXJnaW4tbGVmdDogMXJlbVwiLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBzdmdyUGx1Z2luKCksXG4gICAgICBWaXRlRWpzUGx1Z2luKCksXG4gICAgICBWaXRlUFdBKHtcbiAgICAgICAgcmVnaXN0ZXJUeXBlOiBcImF1dG9VcGRhdGVcIixcbiAgICAgICAgZGV2T3B0aW9uczoge1xuICAgICAgICAgIC8qIHNldCB0aGlzIGZsYWcgdG8gdHJ1ZSB0byBlbmFibGUgaW4gRGV2ZWxvcG1lbnQgbW9kZSAqL1xuICAgICAgICAgIGVuYWJsZWQ6IGVudlZhcnMuVklURV9BUFBfRU5BQkxFX1BXQSA9PT0gXCJ0cnVlXCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgd29ya2JveDoge1xuICAgICAgICAgIC8vIGRvbid0IHByZWNhY2hlIGZvbnRzLCBsb2NhbGVzIGFuZCBzZXBhcmF0ZSBjaHVua3NcbiAgICAgICAgICBnbG9iSWdub3JlczogW1xuICAgICAgICAgICAgXCJmb250cy5jc3NcIixcbiAgICAgICAgICAgIFwiKiovbG9jYWxlcy8qKlwiLFxuICAgICAgICAgICAgXCJzZXJ2aWNlLXdvcmtlci5qc1wiLFxuICAgICAgICAgICAgXCIqKi8qLmNodW5rLSouanNcIixcbiAgICAgICAgICBdLFxuICAgICAgICAgIHJ1bnRpbWVDYWNoaW5nOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHVybFBhdHRlcm46IG5ldyBSZWdFeHAoXCIuKy53b2ZmMlwiKSxcbiAgICAgICAgICAgICAgaGFuZGxlcjogXCJDYWNoZUZpcnN0XCIsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBjYWNoZU5hbWU6IFwiZm9udHNcIixcbiAgICAgICAgICAgICAgICBleHBpcmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICBtYXhFbnRyaWVzOiAxMDAwLFxuICAgICAgICAgICAgICAgICAgbWF4QWdlU2Vjb25kczogNjAgKiA2MCAqIDI0ICogOTAsIC8vIDkwIGRheXNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNhY2hlYWJsZVJlc3BvbnNlOiB7XG4gICAgICAgICAgICAgICAgICAvLyAwIHRvIGNhY2hlIFwib3BhcXVlXCIgcmVzcG9uc2VzIGZyb20gY3Jvc3Mtb3JpZ2luIHJlcXVlc3RzIChpLmUuIENETilcbiAgICAgICAgICAgICAgICAgIHN0YXR1c2VzOiBbMCwgMjAwXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdXJsUGF0dGVybjogbmV3IFJlZ0V4cChcImZvbnRzLmNzc1wiKSxcbiAgICAgICAgICAgICAgaGFuZGxlcjogXCJTdGFsZVdoaWxlUmV2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY2FjaGVOYW1lOiBcImZvbnRzXCIsXG4gICAgICAgICAgICAgICAgZXhwaXJhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgbWF4RW50cmllczogNTAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHVybFBhdHRlcm46IG5ldyBSZWdFeHAoXCJsb2NhbGVzL1teL10rLmpzXCIpLFxuICAgICAgICAgICAgICBoYW5kbGVyOiBcIkNhY2hlRmlyc3RcIixcbiAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGNhY2hlTmFtZTogXCJsb2NhbGVzXCIsXG4gICAgICAgICAgICAgICAgZXhwaXJhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgbWF4RW50cmllczogNTAsXG4gICAgICAgICAgICAgICAgICBtYXhBZ2VTZWNvbmRzOiA2MCAqIDYwICogMjQgKiAzMCwgLy8gPD09IDMwIGRheXNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdXJsUGF0dGVybjogbmV3IFJlZ0V4cChcIi5jaHVuay0uKy5qc1wiKSxcbiAgICAgICAgICAgICAgaGFuZGxlcjogXCJDYWNoZUZpcnN0XCIsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBjYWNoZU5hbWU6IFwiY2h1bmtcIixcbiAgICAgICAgICAgICAgICBleHBpcmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICBtYXhFbnRyaWVzOiA1MCxcbiAgICAgICAgICAgICAgICAgIG1heEFnZVNlY29uZHM6IDYwICogNjAgKiAyNCAqIDkwLCAvLyA8PT0gOTAgZGF5c1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgICAgc2hvcnRfbmFtZTogXCJTY2hlbWFcIixcbiAgICAgICAgICBuYW1lOiBcIlNjaGVtYVwiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgXCJBIG1pbmltYWxpc3QgZHJhd2luZyB0b29sIGZvciBza2V0Y2hpbmcgYW5kIGRpYWdyYW1taW5nLlwiLFxuICAgICAgICAgIGljb25zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNyYzogXCJhbmRyb2lkLWNocm9tZS0xOTJ4MTkyLnBuZ1wiLFxuICAgICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXG4gICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzcmM6IFwiYXBwbGUtdG91Y2gtaWNvbi5wbmdcIixcbiAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgICAgc2l6ZXM6IFwiMTgweDE4MFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3JjOiBcImZhdmljb24tMzJ4MzIucG5nXCIsXG4gICAgICAgICAgICAgIHNpemVzOiBcIjMyeDMyXCIsXG4gICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzcmM6IFwiZmF2aWNvbi0xNngxNi5wbmdcIixcbiAgICAgICAgICAgICAgc2l6ZXM6IFwiMTZ4MTZcIixcbiAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGFydF91cmw6IFwiL1wiLFxuICAgICAgICAgIGlkOiBcIndoaXRlYm9hcmRcIixcbiAgICAgICAgICBkaXNwbGF5OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgICB0aGVtZV9jb2xvcjogXCIjMTIxMjEyXCIsXG4gICAgICAgICAgYmFja2dyb3VuZF9jb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgICAgICAgZmlsZV9oYW5kbGVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhY3Rpb246IFwiL1wiLFxuICAgICAgICAgICAgICBhY2NlcHQ6IHtcbiAgICAgICAgICAgICAgICBcImFwcGxpY2F0aW9uL3ZuZC5leGNhbGlkcmF3K2pzb25cIjogW1wiLmV4Y2FsaWRyYXdcIl0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgc2hhcmVfdGFyZ2V0OiB7XG4gICAgICAgICAgICBhY3Rpb246IFwiL3dlYi1zaGFyZS10YXJnZXRcIixcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBlbmN0eXBlOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgYWNjZXB0OiBbXG4gICAgICAgICAgICAgICAgICAgIFwiYXBwbGljYXRpb24vdm5kLmV4Y2FsaWRyYXcranNvblwiLFxuICAgICAgICAgICAgICAgICAgICBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgXCIuZXhjYWxpZHJhd1wiLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNjcmVlbnNob3RzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNyYzogXCIvc2NyZWVuc2hvdHMvdmlydHVhbC13aGl0ZWJvYXJkLnBuZ1wiLFxuICAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgICAgICBzaXplczogXCI0NjJ4OTQ1XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzcmM6IFwiL3NjcmVlbnNob3RzL3dpcmVmcmFtZS5wbmdcIixcbiAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgICAgc2l6ZXM6IFwiNDYyeDk0NVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3JjOiBcIi9zY3JlZW5zaG90cy9pbGx1c3RyYXRpb24ucG5nXCIsXG4gICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgICAgIHNpemVzOiBcIjQ2Mng5NDVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNyYzogXCIvc2NyZWVuc2hvdHMvc2hhcGVzLnBuZ1wiLFxuICAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgICAgICBzaXplczogXCI0NjJ4OTQ1XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzcmM6IFwiL3NjcmVlbnNob3RzL2NvbGxhYm9yYXRpb24ucG5nXCIsXG4gICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgICAgIHNpemVzOiBcIjQ2Mng5NDVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNyYzogXCIvc2NyZWVuc2hvdHMvZXhwb3J0LnBuZ1wiLFxuICAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgICAgICBzaXplczogXCI0NjJ4OTQ1XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIGNyZWF0ZUh0bWxQbHVnaW4oe1xuICAgICAgICBtaW5pZnk6IHRydWUsXG4gICAgICB9KSxcbiAgICBdLFxuICAgIHB1YmxpY0RpcjogXCIuLi9wdWJsaWNcIixcbiAgfTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0EsUUFBTSxnQkFBZ0I7QUFDdEIsUUFBTSxxQkFBcUI7QUFPM0IsV0FBTyxRQUFRLHFCQUFxQixNQUFNO0FBQ3hDLFVBQUk7QUFFSixhQUFPO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixTQUFTO0FBQUEsUUFDVCxPQUFPLEdBQUcsRUFBRSxRQUFRLEdBQUc7QUFDckIsa0JBQVEsWUFBWTtBQUFBLFFBQ3RCO0FBQUEsUUFDQSxVQUFVLE1BQU0sSUFBSTtBQUdsQixjQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsNkJBQTZCLEdBQUc7QUFDeEQsbUJBQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFJSSxhQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVWIsYUFBYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVViLGFBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFVYixhQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFPMUI7QUFFQSxjQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsMkJBQTJCLEdBQUc7QUFDdEQsbUJBQU8sS0FBSztBQUFBLGNBQ1Y7QUFBQSxjQUNBO0FBQUE7QUFBQTtBQUFBLGFBR0csYUFBYTtBQUFBLGFBQ2Isa0JBQWtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBT2YsYUFBYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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
