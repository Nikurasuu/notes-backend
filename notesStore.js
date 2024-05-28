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
        const result = this.notes.filter(checkNoteTitel);

        function checkNoteTitel(note) {
            return note.titel !== titel;
        }

        console.log(result)
    }
}

module.exports = NotesStore;