const Common = `
    type Client {
        id: String!
        name: String!
        email: String!
        phone: String!    
    }
    
    type Project {
        id: String!
        client: Client!
        name: String!
        description: String!    
        status: String!    
    }
`;

export default Common;