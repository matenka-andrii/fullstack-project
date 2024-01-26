// Models
import { Project } from "../mongo/project";

export class ProjectsService {
    async getProjectById(projectId) {
        const project = await Project.findById(projectId);
        return project.toResponse();
    }
    async getProjects() {
        const projects = await Project.find();
        return projects.map(o => o.toResponse());
    }
}