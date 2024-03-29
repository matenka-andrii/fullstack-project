// Instruments
import { PROJECT_STATUSES } from "../constants/project-statuses";

export default function ProjectCard({ project: { id, name, status }}) {
    return <div className='col-md-6'>
        <div className="card mb-3">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title">
                        { name }
                    </h5>
                    <a className='btn btn-light' href = {`/projects/${id}`}>View</a>
                </div>
                <p className='small'>
                    Status: <strong>{ PROJECT_STATUSES[status] }</strong>
                </p>
            </div>
        </div>
    </div>;
}