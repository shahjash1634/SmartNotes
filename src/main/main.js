const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  console.log("Creating Electron window...");

  const win = new BrowserWindow({
    width: 1000,
    height: 700
  });

  const indexPath = path.join(__dirname, "../../public/index.html");
  win.loadFile(indexPath);
}

app.whenReady().then(() => {
  console.log("Electron ready");
  createWindow();
});