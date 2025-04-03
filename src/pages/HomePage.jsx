import { Link } from "react-router-dom";

const HomePage = () => {

    return (
      <>
      <div className="container">
        <section className="my-4 text-center">
            <h1>Welcome!</h1>
            <p>Here you can see the projects</p>
            <Link to="/projects" className="btn btn-secondary">Projects</Link>
        </section>
      </div>
      </>
    )
}

export default HomePage;