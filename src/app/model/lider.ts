export class Lider {

	private mail: string;
	private name: string;

	constructor(nombre:string, email:string) {
		this.name = nombre;
		this.mail = email;
	}

	getNombre(): string {
		return this.name;
	}
	getMail(): string {
		return this.mail;
	}
	toString(): string {
		return "Name: " + this.name + " Mail: " + this.mail; 
	}
}
