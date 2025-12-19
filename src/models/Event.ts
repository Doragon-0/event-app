export class Event{

	private static _counter:number = 0;

	private _eventId: string;
	
	private _registeredNumber: number = 0;

	private _statut: string = "";

	constructor(
		private _title: string,
		private _description: string,
		private _date: Date,
		private _location: string,
		private _categorie: string,
		private _maxSize : number,
		
	){

		Event._counter++;
		this._eventId = "EVT-" + Event._counter;

	};

	static decrementerCompteur(): void{
		Event._counter--;
	}

	get statut(): string{

		const today = new Date();
		today.setHours(0,0,0,0);
		this._date.setHours(0,0,0,0);
		this._statut = this._date >= today? "En cours" : "Terminé";

		return this._statut;

	}

	set statut(statut: string){
		this._statut = statut
	}

	get eventId(): string{
		return this._eventId;
	}

	set eventId(eventId: string){
		this._eventId = eventId;
	}

	get title(): string{
		return this._title;
	}

	set title(title: string){
		this._title = title;
	}

	get description(): string{
		return this._description;
	}

	set description(description: string){
		this._description = description;
	}

	get date(): string{
		const day = this._date.getDate();
		const month = this._date.getMonth() + 1;
		const year = this._date.getFullYear();
		const dateFormate = `${day}-${month}-${year}`;
		return dateFormate;
	}

	set date(date: Date){
		this._date = date;
	}

	get location(): string{
		return this._location;
	}

	set location(location: string){
		this._location = location;
	}

	get categorie(): string{
		return this._categorie;
	}

	set categorie(categorie: string){
		this._categorie = categorie;
	}

	get maxSize(): number{
		return this._maxSize;
	}

	get registeredNumber(): number{
		return this._registeredNumber;
	}

	set registeredNumber(registeredNumber: number){
		this._registeredNumber = registeredNumber;
	}

	addRegistration(): void{
		this._registeredNumber++;
	}

	evenementPlein(): boolean{
		return this.registeredNumber == this.maxSize;
	}

}