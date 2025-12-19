import { User } from "../models/User.js";
import { EntiteExistanteException } from "../exceptions/EntiteExistanteException.js";

export class UserManager{

	private _userList: User[] = [];

	constructor(){};

	get userList(): User[]{

		return this._userList;

	}

	addUser(user: User): string{

		for(const n of this.userList){

			if(user.address == n.address){

				throw new EntiteExistanteException("❌ Cet utilisateur est déjà enregistré");

			}

		}

		this.userList.push(user);
		return "✅ Utilisateur ajouté"

	}

}