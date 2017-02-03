import { Leader } from './leader';

export class Project {
	private name: string;
	private code: string;
	private type: string;
	private leader: Leader;

	constructor(name: string, code:string, type:string , leader:Leader) {
		this.name = name;
		this.code = code;
		this.type = type;
		this.leader = leader;
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
	getLider(): Leader {
		return this.leader;
	}

	toString(): string {
		return "Code: " + this.code + " Name: " + this.name + " Type: " + this.type + "Lider: " + this.leader.toString();
	}
}
