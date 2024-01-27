// Services
import { ProjectsService } from "../../../services/projects.service";
import { ClientsService } from "../../../services/clients.service";

const projectsService = new ProjectsService();
const clientsService = new ClientsService();

export default {
    Query: {
        project: (parent, { projectId }) => projectsService.getProjectById(projectId),
        projects: () => projectsService.getProjects(),
    },
    Mutation: {
        addProject: (parent, { body }) => projectsService.addProject(body),
        deleteProject: (parent, { projectId }) => projectsService.deleteProject(projectId),
        updateProject: (parent, { projectId, body }) => projectsService.updateProject(projectId, body),
    },
    Project: {
        client: (parent) => clientsService.getClientById(parent.client),
    }
}