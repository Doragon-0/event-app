export class User {
    constructor(_name, _firstname = "", _adress) {
        this._name = _name;
        this._firstname = _firstname;
        this._adress = _adress;
    }
    ;
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get firstname() {
        return this._firstname;
    }
    set firstname(firstname) {
        this._firstname = firstname;
    }
    get address() {
        return this._adress;
    }
    set address(adress) {
        this._adress = adress;
    }
}
