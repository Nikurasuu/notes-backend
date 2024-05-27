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
}

module.exports = NotesStore;