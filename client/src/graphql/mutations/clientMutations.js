// Core
import { gql } from '@apollo/client';

// Mutations
const ADD_CLIENT = gql`
    mutation AddClient($body: AddClientBody) {
        addClient(body: $body) {
            id
            name
            email
            phone
        }    
    }
`;
const DELETE_CLIENT = gql`
    mutation DeleteClient($clientId: String!) {
        deleteClient(clientId: $clientId) {
            id
            name
            email
            phone
        }
    }
`;

export { ADD_CLIENT, DELETE_CLIENT };