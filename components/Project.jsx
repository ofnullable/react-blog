import React from 'react';

const Project = ({ project }) => {
    return (
        <div className="project-item">
            <a href={project.link}>
                <div className="project-image">
                    <img className="thumbnail" src={project.thumbnail}/>
                </div>
                <div className="project-desc">
                    <h1 className="project-name">{project.name}</h1>
                    <p>{project.description}</p>
                </div>
            </a>
        </div>
    );
}

export default Project;