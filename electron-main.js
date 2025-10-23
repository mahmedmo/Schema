const { app, BrowserWindow, protocol } = require('electron');
const path = require('path');
const url = require('url');
const isDev = process.env.NODE_ENV === 'development';

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 800,
    minHeight: 600,
    title: 'Schema',
    titleBarStyle: 'hidden',
    trafficLightPosition: { x: 10, y: 10 },
    icon: path.join(__dirname, 'build-resources/icon-1024.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: true,
    },
    backgroundColor: '#121212',
    show: false, // Don't show until ready
  });

  // Load the app
  if (isDev) {
    // In development, load from Vite dev server
    mainWindow.loadURL('http://localhost:5173');
    mainWindow.webContents.openDevTools();
  } else {
    // In production, load the built files
    const startUrl = url.format({
      pathname: path.join(__dirname, 'schema-app/build/index.html'),
      protocol: 'file:',
      slashes: true
    });
    mainWindow.loadURL(startUrl);
  }

  // Show window when ready to prevent flickering
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Create window when Electron is ready
app.whenReady().then(createWindow);

// Quit when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// On macOS, re-create window when dock icon is clicked
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
