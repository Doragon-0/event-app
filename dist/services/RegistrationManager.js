import { Registration } from "../models/Registration.js";
import { EntiteExistanteException } from "../exceptions/EntiteExistanteException.js";
import { DataBase } from "../data/DataBase.js";
import { EvenementPleinException } from "../exceptions/EvenementPleinException.js";
import { EntiteInexistantException } from "../exceptions/EntiteInexistantException.js";
export class RegistrationManager {
    constructor() {
        this._registrationList = [];
    }
    get registrationList() {
        return this._registrationList;
    }
    addRegistration(eventID, userAddress) {
        if (DataBase.events.eventList.length === 0) {
            throw new EntiteExistanteException("❌ Evénement non enregistré");
        }
        if (DataBase.users.userList.length === 0) {
            throw new EntiteExistanteException("❌ Utilisateur non enregistré");
        }
        for (const e of DataBase.events.eventList) {
            if (e.eventId === eventID) {
                if (e.statut.toLowerCase().includes("terminé")) {
                    throw new EvenementPleinException("❌ Cet événement est déjà passé");
                }
                if (e.evenementPlein()) {
                    throw new EvenementPleinException("❌ Cet événement est déjà plein");
                }
                for (const n of this.registrationList) {
                    if (n.event === e) {
                        if (n.user.address === userAddress) {
                            throw new EntiteExistanteException("❌ Cet utilisateur est déjà enregistré à cet événemennt");
                        }
                    }
                }
                for (const u of DataBase.users.userList) {
                    if (u.address === userAddress) {
                        this.registrationList.push(new Registration(u, e));
                        e.addRegistration();
                        return "✅ Vous êtes enregistré";
                    }
                }
                throw new EntiteExistanteException("❌ Cet utilisateur n'existe pas");
            }
        }
        throw new EntiteInexistantException("❌ Cet événement n'existe pas");
        return "";
    }
}
