import { StateClient } from "../enums/state-client";

export interface ClientI {
    "name": string;
    "state": StateClient;
    "tauxTva": number;
    "id": number;
    "totalCaHt": number;
    "comment": string;
    totalTTC(): number;
}
