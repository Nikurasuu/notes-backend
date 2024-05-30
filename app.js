const NotesStore = require("./notesStore.js")
const Note = require("./note.js")

const notesStore = new NotesStore();

var express = require("express");
var app = express();

app.use(express.json())

app.get('/notes', async (req, res) => {
    res.send(await notesStore.getNotes())
})

app.post('/notes', (req, res) => {
    const notiz = new Note(req.body.titel, req.body.inhalt)
    notesStore.addNote(notiz)
    res.send('Note created.')
})

app.delete('/notes', (req, res) => {
    notesStore.deleteNote(req.query.titel)
    res.send('Note deleted.')
})

app.listen(3000, () => {
 console.log("Server running on port 3000");
}); 
