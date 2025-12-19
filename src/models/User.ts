export class User{

	constructor(

		private _name: string,
		private _firstname: string = "",
		private _adress: string,
	
	){};

	get name(): string{
		return this._name;
	}

	set name(name: string){
		this._name = name;
	}

	get firstname(): string{
		return this._firstname;
	}

	set firstname(firstname: string){
		this._firstname = firstname;
	}

	get address(): string{
		return this._adress;
	}

	set address(adress: string){
		this._adress = adress;
	}

}