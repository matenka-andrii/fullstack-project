// Core
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';

// Icons
import { FaTrash } from 'react-icons/fa';

// Instruments
import { DELETE_PROJECT } from "../graphql/mutations/projectMutations";
import { GET_PROJECTS } from "../graphql/queries/projectQueries";

export default function DeleteProjectButton({ projectId }) {
    const navigate = useNavigate();

    const [ deleteProject ] = useMutation(DELETE_PROJECT, {
        variables: { projectId: projectId },
        onCompleted: () => navigate('/'),
        refetchQueries: [{ query: GET_PROJECTS }],
    });

    return <div className='d-flex mt-5 ms-auto'>
        <button className='btn btn-danger m-2' onClick = { deleteProject }>
            <FaTrash className='icon' /> Delete Project
        </button>
    </div> ;
}