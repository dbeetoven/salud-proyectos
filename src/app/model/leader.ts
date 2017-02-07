export class Leader {

	public mail: string;
	public name: string;

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
	setNombre(name: string) {
		this.name = name;
	}
	setMail(mail: string) {
		this.mail = mail;
	}
	toString(): string {
		return "Name: " + this.name + " Mail: " + this.mail;
	}
}
