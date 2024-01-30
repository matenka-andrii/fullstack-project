const Projects = `
    type Query {
        project(projectId: String!): Project
        projects: [Project]
    }
    
    type Mutation {
        addProject(body: AddProjectBody): Project
        deleteProject(projectId: String!): Project
        updateProject(projectId: String!, body: UpdateProjectBody): Project
    }
    
    input AddProjectBody {
        client: String!
        name: String!
        description: String!
        status: ProjectStatuses,
    }
    
    input UpdateProjectBody {
        client: String
        name: String
        description: String
        status: ProjectStatuses,
    }
`;

export default Projects;