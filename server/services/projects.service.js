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
    async addProject(body) {
        const { client, name, description, status } = body;

        const project = new Project({
            client,
            name,
            description,
            status
        });

        await project.save();

        return project.toResponse();
    }
    async deleteProject(projectId) {
        const project = await Project.findById(projectId);

        if ( !project ) {
            throw new Error('Project with the specified ID not found.');
        }

        await Project.deleteOne({ _id: projectId });

        return project.toResponse();
    }
    async updateProject(projectId, body) {
        let project = await Project.findById(projectId);

        if ( !project ) {
            throw new Error('Project with the specified ID not found.');
        }

        if ( body ) {
            project.set(body);
        }

        await project.save();

        return project.toResponse();
    }
}