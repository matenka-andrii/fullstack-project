import { Client } from "../mongo/client";

export class ClientsService {
    async getClientById(clientId) {
        const client = await Client.findById(clientId);
        return client.toResponse();
    }
    async getClients() {
        const clients = await Client.find();
        return clients.map(o => o.toResponse());
    }
}