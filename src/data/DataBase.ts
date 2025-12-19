import { UserManager } from '../services/UserManager.js';
import { EventManager } from '../services/EventManager.js';
import { RegistrationManager } from '../services/RegistrationManager.js';

export class DataBase{

	private static _users: UserManager = new UserManager();
	private static _events: EventManager = new EventManager();
	private static _registrations: RegistrationManager = new RegistrationManager();


	static get users(): UserManager{

		return DataBase._users;

	}

	static get events(): EventManager{

		return DataBase._events;

	}

	static get registrations(): RegistrationManager{

		return DataBase._registrations;

	}

}