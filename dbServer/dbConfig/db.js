var sqlite3 = require('sqlite3').verbose();
var dbFile = `../dbServer/db/db.sqlite`
var db = new sqlite3.Database(dbFile);

function addDarta(darta){
    console.log(darta);
    db.serialize(function ()
    {
        db.run("CREATE TABLE IF NOT EXISTS darta(dartaNo INTEGER, dartaDate BLOB, dartaPages INTEGER, dartaPagesDate BLOB, dartaAddress TEXT, dartaSubject TEXT, dartaDeptName TEXT, dartaDeptDate BLOB, dartaRemarks TEXT);");
        db.run(`INSERT INTO darta VALUES (${darta.dartaNo}, "${darta.dartaDate}", ${darta.dartaPages}, "${darta.dartaPagesDate}", "${darta.dartaAddress}", "${darta.dartaSubject}", "${darta.dartaDeptName}", "${darta.dartaDeptDate}", "${darta.dartaRemarks}" )`)
    }
)
    console.log("Darta done");
}

function displayDarta(arg, db, ipcMain){
    db.each("SELECT * FROM darta", function (err, row) {
        console.log(row.dartaNo, row.dartaDate, row.dartaPages, row.dartaPagesDate, row.dartaAddress, row.dartaSubject, row.dartaDeptName, row.dartaDeptDate, row.dartaRemarks);
    });
}

module.exports = {
    addDarta : addDarta,
    displayDarta : displayDarta
}