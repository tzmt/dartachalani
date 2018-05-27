const electorn=require('electron');
const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

let win;
path.join(__dirname, 'assets/images/Emblem_of_Nepal.png');
function createMainWindow() {
    win = new BrowserWindow({ title: "Darta Chalani"});

    win.loadURL(url.format({
        pathname: path.join(__dirname + './dist/dartachalani/index.html'),
        protocol: 'file:',
        slashes: true
    }))
    win.webContents.openDevTools();
    win.setMenu(null);
    win.once('ready-to-show', () => {
        win.show();
    })
}

app.on('ready', createMainWindow)
