// Core
import { useMutation } from '@apollo/client';

// Components
import { FaTrash } from "react-icons/fa";

// Instruments
import { DELETE_CLIENT } from "../graphql/mutations/clientMutations";
import { GET_CLIENTS } from "../graphql/queries/clientQueries";

export default function ClientRow({ client: { id, name, email, phone }}) {
    const [ deleteClient ] = useMutation(DELETE_CLIENT, {
        variables: { clientId: id },
        // refetchQueries: [{ query: GET_CLIENTS }],
        update(cache, { data: { deleteClient }}) {
            const { clients } = cache.readQuery({ query: GET_CLIENTS });
            cache.writeQuery({
                query: GET_CLIENTS,
                data: { clients: clients.filter(o => o.id !== deleteClient.id) },
            });
        },
    });

    return <tr>
        <td>{ name }</td>
        <td>{ email }</td>
        <td>{ phone }</td>
        <td>
            <button className="btn btn-danger btn-sm" onClick={ deleteClient }>
                <FaTrash/>
            </button>
        </td>
    </tr>
}