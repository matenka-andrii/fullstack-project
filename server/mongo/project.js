import mongoose from 'mongoose';
import { PROJECT_STATUSES } from "../constants/project-statuses";

const projectSchema = new mongoose.Schema({
    client: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Client',
    },
    name: String,
    description: String,
    status: {
        type: String,
        enum: Object.values(PROJECT_STATUSES),
        default: PROJECT_STATUSES.NOT_STARTED,
    },
});

projectSchema.methods.toResponse = function toResponse() {
    return {
        id: this._id,
        client: this.client,
        name: this.name,
        description: this.description,
        status: this.status,
    };
};

export const Project = mongoose.model('Project', projectSchema);