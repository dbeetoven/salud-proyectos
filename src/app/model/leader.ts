export class Leader {

	public mail: string;
	public name: string;

	constructor(nombre:string, email:string) {
		this.name = nombre;
		this.mail = email;
	}


	toString(): string {
		return "Name: " + this.name + " Mail: " + this.mail;
	}
}
