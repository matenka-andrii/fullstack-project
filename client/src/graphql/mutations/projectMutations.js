// Core
import { gql } from '@apollo/client';

// Mutations
const ADD_PROJECT = gql`
    mutation AddProject($body: AddProjectBody) {
        addProject(body: $body) {
            id
            client {
                id
                name,
                email
                phone
            }
            name
            description    
            status
        }    
    }
`;
const DELETE_PROJECT = gql`
    mutation DeleteProject($projectId: String!) {
        deleteProject(projectId: $projectId) {
            id
        }
    }
`;
const UPDATE_PROJECT = gql`
    mutation UpdateProject($projectId: String!, $body: UpdateProjectBody) {
        updateProject(projectId: $projectId, body: $body) {
            status
            name
            id
            description
        }
    }
`;

export { ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT };