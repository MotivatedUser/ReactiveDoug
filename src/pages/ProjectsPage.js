import React from 'react';
import ProjectsGrid from '../components/ProjectsGrid';
import Footer from '../components/Footer';
import OrangeHeader from '../components/OrangeHeader';

const ProjectsPage = () => {
  

  return (
    <>
    <OrangeHeader />
    <div className='ProjectsContainer'>
      
      <h3 className='ProjectsTitle'>Welcome to Doug's Project Page</h3>
      <ProjectsGrid />
      
    </div>
<Footer />
</>
  );
};

export default ProjectsPage;

