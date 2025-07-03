const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: './src/assets/logo.ico',
    webPreferences: {
      nodeIntegration: false,  // ça évite certains risques, surtout si t'as que du front
      contextIsolation: true
    }
  });

  win.loadFile('index.html'); // charge ton fichier HTML principal
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
