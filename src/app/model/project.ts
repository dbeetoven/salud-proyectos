import { Leader } from './leader';

export class Project {
	public name: string;
	public code: string;
	public type: string;
	public leader: Leader;
	public _id: number;

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
