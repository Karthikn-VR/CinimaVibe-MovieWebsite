import { Link } from "react-router-dom";
export default function Navbar({
  setQuery,
  getSearch,
  setpageno,
  setName,
  setPassword,
  Name,
  password,
}) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark py-3 fixed-top shadow">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <i className="bi bi-camera-reels me-2"></i>
          <span className="h4 mb-0">Cinema Vibe</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setpageno(1)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/price">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
          <div className="ms-auto d-flex">
            <form className="d-flex" role="search" onSubmit={getSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                required
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
            <button
              className="btn btn-outline-light ms-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
            >
              Explore
            </button>
            <button
              type="button"
              className="btn btn-outline-light ms-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
