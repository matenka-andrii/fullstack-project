// Core
import { useState } from "react";
import { useMutation } from "@apollo/client";

// Instruments
import { keys } from "ramda";
import { GET_PROJECT } from "../graphql/queries/projectQueries";
import { UPDATE_PROJECT } from "../graphql/mutations/projectMutations";
import { PROJECT_STATUSES } from "../constants/project-statuses";

export default function EditProjectForm({ project }) {
    /* State */
    const [name, setName] = useState(project.name);
    const [description, setDescription] = useState(project.description);
    const [status, setStatus] = useState(project.status);

    /* Hooks */
    const [updateProject] = useMutation(UPDATE_PROJECT, {
        variables: { projectId: project.id, body: { name, description, status }},
        refetchQueries: [{ query: GET_PROJECT, variables: { projectId: project.id } }],
    });

    /* Actions */
    const onSubmit = (e) => {
        e.preventDefault();

        if (!name || !description || !status) {
            return alert("Please fill out all fields");
        }

        updateProject({ projectId: project.id, body: { name, description, status }});
    };

    /* Html */
    const statusOptions = keys(PROJECT_STATUSES).map(option => {
        return <option key = {option} value = { option }>{ PROJECT_STATUSES[option] }</option>;
    });

    return <div className="mt-5">
        <h3>Update Project Details</h3>
        <form onSubmit = { onSubmit }>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <div className="mb-3">
                <label className="form-label">Status</label>
                <select id="status" className="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
                    { statusOptions }
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div> ;
}