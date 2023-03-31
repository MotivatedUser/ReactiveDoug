import React from 'react'

const ProjectItem = ({ project }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={project.image} alt={project.title} />
        </div>
        <div className='card-back'>
          <h1>{project.title}</h1>
          <ul>
            <li>
              <strong>URL:</strong> <a href={project.url}>{project.url}</a>
              
            </li>
            <li>
                <strong>Tech Used:</strong> <p className='cardP' >{project.technologies}</p>
            </li>
            <li>
                <strong>Learning Outcomes:</strong> <p className='cardP'>{project.learning}</p>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
