export class Event {
    constructor(_title, _description, _date, _location, _categorie, _maxSize) {
        this._title = _title;
        this._description = _description;
        this._date = _date;
        this._location = _location;
        this._categorie = _categorie;
        this._maxSize = _maxSize;
        this._registeredNumber = 0;
        this._statut = "";
        Event._counter++;
        this._eventId = "EVT-" + Event._counter;
    }
    ;
    static decrementerCompteur() {
        Event._counter--;
    }
    get statut() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        this._date.setHours(0, 0, 0, 0);
        this._statut = this._date >= today ? "En cours" : "Terminé";
        return this._statut;
    }
    set statut(statut) {
        this._statut = statut;
    }
    get eventId() {
        return this._eventId;
    }
    set eventId(eventId) {
        this._eventId = eventId;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get description() {
        return this._description;
    }
    set description(description) {
        this._description = description;
    }
    get date() {
        const day = this._date.getDate();
        const month = this._date.getMonth() + 1;
        const year = this._date.getFullYear();
        const dateFormate = `${day}-${month}-${year}`;
        return dateFormate;
    }
    set date(date) {
        this._date = date;
    }
    get location() {
        return this._location;
    }
    set location(location) {
        this._location = location;
    }
    get categorie() {
        return this._categorie;
    }
    set categorie(categorie) {
        this._categorie = categorie;
    }
    get maxSize() {
        return this._maxSize;
    }
    get registeredNumber() {
        return this._registeredNumber;
    }
    set registeredNumber(registeredNumber) {
        this._registeredNumber = registeredNumber;
    }
    addRegistration() {
        this._registeredNumber++;
    }
    evenementPlein() {
        return this.registeredNumber == this.maxSize;
    }
}
Event._counter = 0;
