import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    client: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Client',
    },
    name: String,
    description: String,
    status: String,
});

projectSchema.methods.toResponse = function toResponse() {
    return {
        id: this._id,
        client: this.client,
        name: this.name,
        description: this.email,
        status: this.phone,
    };
};

export const Project = mongoose.model('Project', projectSchema);