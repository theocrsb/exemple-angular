import { StateClient } from "../enums/state-client";
import { ClientI } from "../interfaces/client-i";

export class Client implements ClientI{
    name!: string;
    state =  StateClient.ACTIVE;
    tauxTva = 20;
    id!: number;
    totalCaHt!: number;
    comment!: string;
    constructor(obj?: Partial<Client>) {
        if(obj) {
            Object.assign(this, obj);
        }
    }
    totalTTC(): number {
        return this.totalCaHt * (1 + this.tauxTva / 100);
    }
}
