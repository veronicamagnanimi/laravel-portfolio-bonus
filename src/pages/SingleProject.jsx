import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const SingleProjectPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/projects/${id}`) 
      .then((response) => {
        setProject(response.data);
      })
  }, [id]);


  if (!project) return <p>Progetto non trovato.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{project.name}</h1>
      <p className="mb-4">{project.description}</p>
      <Link to="/projects" className="text-blue-500 hover:underline">Torna alla lista</Link>
    </div>
  );
};

export default SingleProjectPage;
