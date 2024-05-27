class Note {
    constructor(titel, inhalt) {
        this.titel = titel;
        this.inhalt = inhalt;
    }

    getTitel() {
        return this.titel;
    }
}

module.exports = Note;