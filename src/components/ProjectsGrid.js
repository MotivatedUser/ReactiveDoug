import React, { useState, useEffect } from 'react';
import { projectsData } from './ProjectsData';
import ProjectItem from './ProjectItem';
import Search from './Search';

function ProjectsGrid() {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    // Simulate loading time and only allows 12 results to show at 1 time.
    setTimeout(() => {
      const someProjects = projectsData.slice(0, 18);
      setProjects(someProjects);
      setIsLoading(false);
    }, 1000);
  }, []);

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Search getQuery={(q) => setQuery(q)} />
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center spinner-wrapper" style={{ paddingTop: '10%' }}>
          <div className="spinner-border orange" role="status" >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="cards">
          {filteredProjects.map((project, index) => (
            <ProjectItem project={project} key={index} />
          ))}
        </div>
      )}
    </>
  );
}

export default ProjectsGrid;
