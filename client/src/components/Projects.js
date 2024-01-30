// Core
import { useQuery } from '@apollo/client';

// Components
import Spinner from "./Spinner";
import ProjectCard from "./ProjectCard";

// Instruments
import { GET_PROJECTS } from "../graphql/queries/projectQueries";

export default function Projects() {
    const { loading, error, data } = useQuery(GET_PROJECTS);

    if ( loading ) return <Spinner/>;
    if ( error ) return <p>Something went wrong</p>;

    return <>
        { data.projects.length > 0
            ? <div className='row mt-4'>
                { data.projects.map(o => (
                    <ProjectCard key = { o.id } project = { o } />
                )) }
            </div>
            : <p>No Projects</p> }
    </>;
}