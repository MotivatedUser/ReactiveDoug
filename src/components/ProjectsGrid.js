import React, { useState, useEffect } from 'react'
import { projectsData } from './ProjectsData'
import ProjectItem from './ProjectItem'

function ProjectsGrid() {
  const [isLoading, setIsLoading] = useState(true);
  const [someProjects, setSomeProjects] = useState([]);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      const someProjects = projectsData.slice(0, 9);
      setSomeProjects(someProjects);
      setIsLoading(false);
    }, 2000);
  }, []);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="cards">
      {someProjects.map((project, index) => (
        <ProjectItem project={project} key={index} />
      ))}
    </div>
    
  );
}

export default ProjectsGrid
