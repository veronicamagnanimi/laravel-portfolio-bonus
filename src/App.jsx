import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import ProjectsPage from "./pages/ProjectsPage";
import SingleProject from "./pages/SingleProject";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<SingleProject />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
