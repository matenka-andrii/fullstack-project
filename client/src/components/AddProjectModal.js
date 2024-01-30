// Core
import { useState } from "react";
import { useMutation, useQuery } from '@apollo/client';

// Icons
import { FaList } from 'react-icons/fa'

// Instruments
import { keys } from "ramda";
import { ADD_PROJECT } from "../graphql/mutations/projectMutations";
import { GET_CLIENTS } from "../graphql/queries/clientQueries";
import { GET_PROJECTS } from "../graphql/queries/projectQueries";
import { PROJECT_STATUSES } from "../constants/project-statuses";

export default function AddProjectModal() {
    /* State */
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [client, setClient] = useState('');
    const [status, setStatus] = useState('NOT_STARTED');

    const { loading, error, data } = useQuery(GET_CLIENTS);

    /* Hooks */
    const [ addProject ] = useMutation(ADD_PROJECT, {
        variables: { body: { name, description, client, status }},
        update(cache, { data: { addProject }}) {
            const { projects } = cache.readQuery({ query: GET_PROJECTS });
            cache.writeQuery({
                query: GET_PROJECTS,
                data: { projects: [...projects, addProject] },
            });
        },
    });

    /* Actions */
    const onSubmit = (e) => {
        e.preventDefault();

        if ( name === '' || description === '' || status === '' || client === '' ) {
            return alert('Please fill the form');
        }

        addProject({ body: { name, description, client, status }});
        setName('');
        setDescription('');
        setClient('');
        setStatus('NOT_STARTED');
    };

    /* Html */
    const statusOptions = keys(PROJECT_STATUSES).map(option => {
        return <option key = {option} value = { option }>{ PROJECT_STATUSES[option] }</option>;
    });
    const clientOptions = loading || error
        ? null
        : data.clients.map(o => {
            return <option key = { o.id } value = { o.id }>{ o.name }</option>;
        });

    if ( loading ) return null;
    if ( error ) return <p>Something went wrong</p>;

    return <>
        { !loading && !error && (
            <>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProjectModal">
                    <div className="d-flex align-items-center">
                        <FaList className='icon'/>
                        <div>New Project</div>
                    </div>
                </button>
                <div className="modal fade" id="addProjectModal" aria-labelledby="addProjectModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="addProjectModalLabel">New Project</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit = { onSubmit }>
                                    <div className="mb-3">
                                        <label className='form-label'>Name</label>
                                        <input type='text' className='form-control' id='name' value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label className='form-label'>Description</label>
                                        <textarea className='form-control' id='description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label className='form-label'>Status</label>
                                        <select id="status" className="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
                                            { statusOptions }
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className='form-label'>Client</label>
                                        <select id="client" className="form-select" value={client} onChange={(e) => setClient(e.target.value)}>
                                            <option key = 'empty' value = "">Select Client</option>
                                            { clientOptions }
                                        </select>
                                    </div>
                                    <button className="btn btn-primary" type='submit' data-bs-dismiss='modal'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        ) }
    </>;
}