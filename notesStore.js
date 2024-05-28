class NotesStore{
    constructor() {
        this.notes = [];
    }

    getNotes(){
        return this.notes;
    }

    addNote(note){
        this.notes.push(note);
    }

    deleteNote(titel) {
        this.notes = this.notes.filter(note => note.titel !== titel);
    }
}

module.exports = NotesStore;