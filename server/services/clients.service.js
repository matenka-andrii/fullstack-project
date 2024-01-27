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
    async addClient(body) {
        const { name, email, phone } = body;

        // Email validation
        const existingClient = await Client.findOne({ email });

        if (existingClient) {
            throw new Error('A client with the provided email already exists.');
        }

        const client = new Client({
            name,
            email,
            phone
        });

        await client.save();

        return client.toResponse();
    }
    async deleteClient(clientId) {
        const client = await Client.findById(clientId);

        if ( !client ) {
            throw new Error('Client with the specified ID not found.');
        }

        await Client.deleteOne({ _id: clientId });

        return `Client with ID ${clientId} has been successfully deleted.`;
    }
}