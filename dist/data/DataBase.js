import { UserManager } from '../services/UserManager.js';
import { EventManager } from '../services/EventManager.js';
import { RegistrationManager } from '../services/RegistrationManager.js';
export class DataBase {
    static get users() {
        return DataBase._users;
    }
    static get events() {
        return DataBase._events;
    }
    static get registrations() {
        return DataBase._registrations;
    }
}
DataBase._users = new UserManager();
DataBase._events = new EventManager();
DataBase._registrations = new RegistrationManager();
