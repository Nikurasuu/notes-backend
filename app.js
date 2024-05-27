const NotesStore = require("./notesStore.js")
const Note = require("./note.js")

const notesStore = new NotesStore();

const notiz1 = new Note("test1", "inhalt1")
const notiz2 = new Note("test2", "inhalt2")

notesStore.addNote(notiz1)
notesStore.addNote(notiz2)

console.log(notesStore.getNotes())

var express = require("express");
var app = express();

app.get('/', (req, res) => {
    res.send(notesStore.getNotes())
})

//benutzt port 3000 
app.listen(3000, () => {
 console.log("Server running on port 3000");
}); 