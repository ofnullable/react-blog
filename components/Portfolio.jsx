import React from 'react';
import Project from './Project';

const projects = [
    {
        thumbnail: 'https://placeimg.com/550/300/animals',
        name: 'Project Name',
        description: 'Simple Description For This Project',
        link: 'javascript:void(0);',
    },
    {
        thumbnail: 'https://placeimg.com/550/300/nature',
        name: 'Project Name',
        description: 'Simple Description For This Project',
        link: 'javascript:void(0);',
    },
    {
        thumbnail: 'https://placeimg.com/550/300/tech',
        name: 'Project Name',
        description: 'Simple Description For This Project',
        link: 'javascript:void(0);',
    },
    {
        thumbnail: 'https://placeimg.com/550/300/tech',
        name: 'Project Name',
        description: 'Simple Description For This Project',
        link: 'javascript:void(0);',
    },
    {
        thumbnail: 'https://placeimg.com/550/300/nature',
        name: 'Project Name',
        description: 'Simple Description For This Project',
        link: 'javascript:void(0);',
    },
    {
        thumbnail: 'https://placeimg.com/550/300/animals',
        name: 'Project Name',
        description: 'Simple Description For This Project',
        link: 'javascript:void(0);',
    },
]

const Portfolio = () => {
    return (
        <div className="project-list">
            {
                projects.map( (p, i) => {
                    return <Project key={`프로젝트 ${i + 1}`} project={p} />
                })
            }
            <nav id="load-more">
                Load more <span />
            </nav>
        </div>
    )
}

export default Portfolio;