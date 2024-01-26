const Clients = `
    type Query {
        client(clientId: String!): Client
        clients: [Client]
    }
`;

export default Clients;