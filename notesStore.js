var mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "tiger",
    database: "notes"
});

class NotesStore{
    constructor() {
        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
        });
    }

    async getNotes(){
        return new Promise((resolve, reject) => {
            con.query('SELECT * FROM notes', function (err, result) {
                if (err) reject(err);
                resolve(result);
            });
        });
    }

    addNote(note) {
        const sql = 'INSERT INTO notes SET ?';
        con.query(sql, note, function (err, result) {
            if (err) reject(err);
        });
    }

    deleteNote(titel) {
        const sql = 'DELETE FROM notes WHERE titel = ?';
        con.query(sql, [titel], function (err, result) {
            if (err) reject(err);
        });
    }
}

module.exports = NotesStore;