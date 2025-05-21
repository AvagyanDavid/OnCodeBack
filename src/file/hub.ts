import { Injectable } from "@nestjs/common";
import { Socket } from "socket.io";

@Injectable()
export class Hub {
    clients: Map<Socket, boolean>

    constructor(){
        this.clients = new(Map<Socket, boolean>)
    };

    add(client: Socket) {
        this.clients.set(client, true);
    }
}