import React from 'react';
import Header from '../components/Header';
import ProjectsGrid from '../components/ProjectsGrid';
import Footer from '../components/Footer';

const ProjectsPage = () => {
  

  return (
    <>
    <Header />
    <div className='ProjectsContainer'>
      
      <h3 className='ProjectsTitle'>Welcome to Doug's Project Page</h3>
      <ProjectsGrid />
      
    </div>
<Footer />
</>
  );
};

export default ProjectsPage;

