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
    Project: {
        client: (parent) => clientsService.getClientById(parent.clientId),
    }
}