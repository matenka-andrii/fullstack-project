const Clients = `
    type Query {
        client(clientId: String!): Client
        clients: [Client]
    }
    type Mutation {
        addClient(body: AddClientBody): Client
        deleteClient(clientId: String!): Client
    }
    
    input AddClientBody {
        name: String!
        email: String!
        phone: String!
    }
`;

export default Clients;