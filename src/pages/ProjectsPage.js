import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ProjectsGrid from "../components/ProjectsGrid";
import Footer from "../components/Footer";
import { projectsData } from "../components/ProjectsData";

const ProjectsPage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const result = projectsData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setItems(result);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div className="ProjectsContainer">
      <Header />
      <h3 className="ProjectsTitle">Welcome to Doug's Project Page</h3>
      <ProjectsGrid items={items} isLoading={isLoading} />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
