import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  //api 
  // const apiLaravel = import.meta.env.VITE_API_URL;


  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/projects") 
      .then((resp) => {
        setProjects(resp.data.data);
        
        console.log(resp.data);
      })
  }, []);
    
  


  return (
    <div className="p-6">
      <h1 className="text-center font-bold my-4">Lista Progetti</h1>
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
