import { User } from "./User.js";
import { Event } from "./Event.js";

export class Registration{

	constructor(
	
		private _user: User,
		private _event: Event,)

	{}

	get user(): User{
		return this._user;
	}

	get event(): Event{
		return this._event;
	}

}