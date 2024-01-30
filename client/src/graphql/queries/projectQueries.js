// Core
import { gql } from '@apollo/client';

// Queries
const GET_PROJECTS = gql`
    query getProjects {
        projects {
            id
            name
            status
        }
    }
`;
const GET_PROJECT = gql`
    query getProject($projectId: String!) {
        project(projectId: $projectId) {
            description
            id
            name
            status
            client {
              email
              id
              name
              phone
            }        
        }
    }
`;

export { GET_PROJECTS, GET_PROJECT };