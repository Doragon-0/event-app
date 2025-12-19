import { Event } from "../models/Event.js";
import { EntiteExistanteException } from "../exceptions/EntiteExistanteException.js";

export class EventManager{

	private _eventList: Event[] = [];

	constructor(){}

	get eventList(): Event[]{
		return this._eventList;
	}

	ajouterEvenement(event: Event): string{

		for(const n of this.eventList){

			if(event.title == n.title){

				Event.decrementerCompteur();
				throw new EntiteExistanteException("❌ Cet événement existe déjà");

			}

		}

		this.eventList.push(event);
		return "✅ Evénement ajouté";

	}


}