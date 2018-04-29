const electron = require('electron');
const {app, BrowserWindow} = electron;

app.on('ready', () => {
  let win = new BrowserWindow({
    width:1536,
    height:864,
    frame: false,
    icon: __dirname + '/icon.ico'
});
  win.loadURL(`https://killzonegaming.com/forum/`)
  win.webContents.on('did-finish-load', function() {
  win.webContents.insertCSS('body{-webkit-app-region:drag}button,a,span{-webkit-app-region:no-drag}')
});
  win.setMenu(null)
});
