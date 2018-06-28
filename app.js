const electorn=require('electron');
const {app, BrowserWindow, ipcMain} = require('electron');
const url = require('url');
const path = require('path');


//SQLite Configuration
var sqlite3 = require('sqlite3').verbose();
var dbFile = `${__dirname}/dbServer/db/dartachalani.db`;
var db = new sqlite3.Database(dbFile);
// const utsav = require('../dbServer/dbConfig/db')
let win;

function createMainWindow() {
    win = new BrowserWindow({ title: "Darta Chalani"});

    // win.loadURL(url.format({
    //     pathname: path.join(__dirname, 'app.asar','index.html'),
    //     protocol: 'file:',
    //     slashes: true
    // }))

    win.loadURL(url.format({
        pathname: path.join(__dirname, '/build/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    win.webContents.openDevTools();
    win.setMenu(null);
    win.once('ready-to-show', () => {
        win.show();
    })
    
    
    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    })
}
app.on('ready', createMainWindow);
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
    db.close();
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
    console.log(__dirname);
})

ipcMain.on('newDarta', (event, arg) => {
    db.serialize(function () {
        db.run("CREATE TABLE IF NOT EXISTS darta(dartaNo INTEGER PRIMARY KEY AUTOINCREMENT, dartaDate BLOB, dartaPages INTEGER, dartaPagesDate BLOB, dartaAddress TEXT, dartaSubject TEXT, dartaDeptName TEXT, dartaDeptDate BLOB, dartaRemarks TEXT);");
        db.run(`INSERT INTO darta(dartaDate, dartaPages, dartaPagesDate, dartaAddress, dartaSubject, dartaDeptName, dartaDeptDate, dartaRemarks) VALUES ("${arg.dartaDate}", ${arg.dartaListSchema.dartaPages}, "${arg.dartaPagesDate}", "${arg.dartaListSchema.dartaAddress}", "${arg.dartaListSchema.dartaSubject}", "${arg.dartaListSchema.dartaDeptName}", "${arg.dartaDeptDate}", "${arg.dartaListSchema.dartaRemarks}" )`);
        }
    )
    console.log("Darta done");
});

ipcMain.on('listDarta', (event, arg) => {
    db.all("SELECT * from darta;", function (err, row) {
        console.log("List all Darta");
        console.log("*****");
        event.sender.send('dartaListReceived', row);
    });
})

ipcMain.on('deleteDarta', (event, arg) => {
    console.log(JSON.stringify(arg));
    db.serialize(function () {
        db.run(`DELETE FROM darta WHERE dartaNo=${arg.dartaNo} AND dartaDate="${arg.dartaDate}";`);
    });
    event.sender.send('dartaDeleted', arg);
})

ipcMain.on('editDarta', (event, arg) => {
    console.log(arg);
    db.serialize(function () {
        // db.run(`UPDATE darta SET dartaDate = "${arg.dartaDate}",  dartaPages=${arg.dartaPages}, dartaPagesDate="${arg.dartaPagesDate}", dartaAddress="${arg.dartaAddress}", dartaSubject="${arg.dartaSubject}", dartaDeptName="${arg.dartaDeptName}", dartaDeptDate="${arg.dartaDeptDate}", dartaRemarks="${arg.dartaRemarks}" WHERE dartaNo=${arg.dartaNo} AND dartaDate="${arg.dartaDate}";`);
        db.run(`UPDATE darta SET dartaNo=${arg.dartaListSchema.dartaNo}, dartaDate="${arg.dartaDate}",  dartaPages=${arg.dartaListSchema.dartaPages}, dartaPagesDate="${arg.dartaPagesDate}", dartaAddress="${arg.dartaListSchema.dartaAddress}", dartaSubject="${arg.dartaListSchema.dartaSubject}", dartaDeptName="${arg.dartaListSchema.dartaDeptName}", dartaDeptDate="${arg.dartaDeptDate}", dartaRemarks="${arg.dartaListSchema.dartaRemarks}" WHERE dartaNo=${arg.dartaListSchema.dartaNo} AND dartaDate="${arg.dartaDate}";`);
    });
    event.sender.send('dartaEdited', arg);
})

ipcMain.on('newChalani', (event, arg) => {
    db.serialize(function () {
        db.run("CREATE TABLE IF NOT EXISTS chalani(chalaniNo INTEGER PRIMARY KEY AUTOINCREMENT, chalaniDate BLOB, chalaniPages INTEGER, chalaniPagesDate BLOB, chalaniDestName TEXT, chalaniDestAddress TEXT, chalaniSubject TEXT, chalaniHulakNo TEXT, chalaniRemarks TEXT);");
        db.run(`INSERT INTO chalani(chalaniDate, chalaniPages, chalaniPagesDate, chalaniDestName, chalaniDestAddress, chalaniSubject, chalaniHulakNo, chalaniRemarks) VALUES ("${arg.chalaniDate}", ${arg.chalaniListSchema.chalaniPages}, "${arg.chalaniPagesDate}", "${arg.chalaniListSchema.chalaniDestName}","${arg.chalaniListSchema.chalaniDestAddress}", "${arg.chalaniListSchema.chalaniSubject}", "${arg.chalaniListSchema.chalaniHulakNo}", "${arg.chalaniListSchema.chalaniRemarks}" )`);
    }
    )
    console.log("Chalani done");
});

ipcMain.on('listChalani', (event, arg) => {
    db.all("SELECT * from chalani;", function (err, row) {
        console.log("List all chalani");
        console.log("*****");
        event.sender.send('chalaniListReceived', row);
    });
})

ipcMain.on('deleteChalani', (event, arg) => {
    console.log(JSON.stringify(arg));
    db.serialize(function () {
        db.run(`DELETE FROM chalani WHERE chalaniNo=${arg.chalaniNo} AND chalaniDate="${arg.chalaniDate}";`);
    });
    event.sender.send('chalaniDeleted', arg);
})

ipcMain.on('editChalani', (event, arg) => {
    console.log(arg);
    db.serialize(function () {
        // db.run(`UPDATE chalani SET chalaniDate = "${arg.chalaniDate}",  chalaniPages=${arg.chalaniPages}, chalaniPagesDate="${arg.chalaniPagesDate}", chalaniAddress="${arg.chalaniAddress}", chalaniSubject="${arg.chalaniSubject}", chalaniDeptName="${arg.chalaniDeptName}", chalaniDeptDate="${arg.chalaniDeptDate}", chalaniRemarks="${arg.chalaniRemarks}" WHERE chalaniNo=${arg.chalaniNo} AND chalaniDate="${arg.chalaniDate}";`);
        db.run(`UPDATE chalani SET chalaniNo=${arg.chalaniListSchema.chalaniNo}, chalaniDate="${arg.chalaniDate}",  chalaniPages=${arg.chalaniListSchema.chalaniPages}, chalaniPagesDate="${arg.chalaniPagesDate}", chalaniDestName="${arg.chalaniListSchema.chalaniDestName}", chalaniDestAddress="${arg.chalaniListSchema.chalaniDestAddress}", chalaniSubject="${arg.chalaniListSchema.chalaniSubject}", chalaniHulakNo="${arg.chalaniListSchema.chalaniHulakNo}", chalaniRemarks="${arg.chalaniListSchema.chalaniRemarks}" WHERE chalaniNo=${arg.chalaniListSchema.chalaniNo} AND chalaniDate="${arg.chalaniDate}";`);
    });
    event.sender.send('chalaniEdited', arg);
})
