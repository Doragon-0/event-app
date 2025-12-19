import { EntiteExistanteException } from "../exceptions/EntiteExistanteException.js";
export class UserManager {
    constructor() {
        this._userList = [];
    }
    ;
    get userList() {
        return this._userList;
    }
    addUser(user) {
        for (const n of this.userList) {
            if (user.address == n.address) {
                throw new EntiteExistanteException("❌ Cet utilisateur est déjà enregistré");
            }
        }
        this.userList.push(user);
        return "✅ Utilisateur ajouté";
    }
}
