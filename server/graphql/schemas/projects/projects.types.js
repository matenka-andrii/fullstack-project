const Projects = `
    type Query {
        project(projectId: String!): Project
        projects: [Project]
    }
`;

export default Projects;