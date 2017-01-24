import { Lider } from './lider';

export class Proyecto {
	private name: string;
	private code: string;
	private type: string;
	private leader: Lider;

	constructor(nombre: string, codigo:string, tipo:string , lider:Lider) {
		this.name = nombre;
		this.code = codigo;
		this.type = tipo;
		this.leader = lider;
	}

	getNombre(): string {
		return this.name;
	}
	getCodigo(): string {
		return this.code;
	}
	getTipo(): string {
		return this.type;
	}
	getLider(): Lider {
		return this.leader;
	}

	toString(): string {
		return "Code: " + this.code + " Name: " + this.name + " Type: " + this.type + "Lider: " + this.leader.toString();
	}
}
