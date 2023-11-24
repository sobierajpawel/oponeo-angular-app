import { Guid } from "guid-typescript";

export class Toast {
    constructor(public messageContent : string, public guid : Guid,
        public isError : boolean){

        }
}
