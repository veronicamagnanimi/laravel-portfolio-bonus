import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/projects") // Endpoint API Laravel
      .then((response) => {
        setProjects(response.data);
        
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Errore nel recupero dei progetti:", error);
       
      });
  }, []);

//   if (loading) return <p>Caricamento in corso...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Lista Progetti</h1>
      <ul className="space-y-2">
        {projects.map((project) => (
          <li key={project.id} className="border p-4 rounded-lg shadow">
            <Link to={`/projects/${project.id}`} className="text-blue-500 hover:underline">
              {project.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;
