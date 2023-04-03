import React, { useState, useEffect } from 'react'
import { projectsData } from './ProjectsData'
import ProjectItem from './ProjectItem'
import Search from './Search';

function ProjectsGrid() {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [query, setQuery] = useState("")

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      const someProjects = projectsData.slice(0, 12);
      setProjects(someProjects);
      setIsLoading(false);
    }, 2000);
  }, []);

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(query.toLowerCase())
  );

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <>
    <Search getQuery={(q) => setQuery(q)} />
    <div className="cards">
      {filteredProjects.map((project, index) => (
        <ProjectItem project={project} key={index} />
      ))}
    </div>
    </>
  );
}

export default ProjectsGrid
