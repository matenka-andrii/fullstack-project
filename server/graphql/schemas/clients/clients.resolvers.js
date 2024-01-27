// Services
import { ClientsService } from "../../../services/clients.service";

const clientsService = new ClientsService();

export default {
    Query: {
        client: (parent, { clientId }) => clientsService.getClientById(clientId),
        clients: () => clientsService.getClients(),
    },
    Mutation: {
        addClient: (parent, { body }) => clientsService.addClient(body),
        deleteClient: (parent, { clientId }) => clientsService.deleteClient(clientId),
    }
}