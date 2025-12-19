export class Inscription {
    constructor(_user, _event) {
        this._user = _user;
        this._event = _event;
    }
    get user() {
        return this._user;
    }
    get event() {
        return this._event;
    }
}
