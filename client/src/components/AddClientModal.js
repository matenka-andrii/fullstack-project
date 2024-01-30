// Core
import { useState } from "react";
import { useMutation } from '@apollo/client';

// Icons
import { FaUser } from 'react-icons/fa'

// Instruments
import { ADD_CLIENT } from "../graphql/mutations/clientMutations";
import { GET_CLIENTS } from "../graphql/queries/clientQueries";

export default function AddClientModal() {
    /* State */
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    /* Hooks */
    const [ addClient ] = useMutation(ADD_CLIENT, {
        variables: { body: { name, email, phone }},
        update(cache, { data: { addClient }}) {
            const { clients } = cache.readQuery({ query: GET_CLIENTS });
            cache.writeQuery({
                query: GET_CLIENTS,
                data: { clients: [...clients, addClient] },
            });
        },
    });

    /* Actions */
    const onSubmit = (e) => {
        e.preventDefault();

        if ( name === '' || email === '' || phone === '' ) {
            return alert('Please fill the form');
        }

        addClient({ body: { name, email, phone }});
        setName('');
        setEmail('');
        setPhone('');
    };

    return <>
        <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#addClientModal">
            <div className="d-flex align-items-center">
                <FaUser className='icon'/>
                <div>Add Client</div>
            </div>
        </button>
        <div className="modal fade" id="addClientModal" aria-labelledby="addClientModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="addClientModalLabel">Add Client</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit = { onSubmit }>
                            <div className="mb-3">
                                <label className='form-label'>Name</label>
                                <input type='text' className='form-control' id='name' value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className='form-label'>Email</label>
                                <input type='text' className='form-control' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className='form-label'>Phone</label>
                                <input type='text' className='form-control' id='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <button className="btn btn-secondary" type='submit' data-bs-dismiss='modal'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>;
}