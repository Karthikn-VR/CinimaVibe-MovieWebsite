import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import MovieCardList from "../Components/MovieCardList";
import LoginModal from "../Components/LoginModal";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [condition, setCondition] = useState(false);
  const [allmovies, showallmovies] = useState([]);
  const [Name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [pageno, setpageno] = useState(1);

  const navigate = useNavigate();
  const API_KEY = "97046a7188e5b2b6333420cfa941c6e6";

  useEffect(() => {
    if (query) getAllMovies();
  }, [query, pageno]);

  useEffect(() => {
    GetAllMovies();
  }, [pageno]);

  const getAllMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${pageno}`
      );
      const data = await response.json();
      setMovies(data.results || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]);
    }
  };

  const GetAllMovies = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${pageno}`
      );
      const data = await res.json();
      showallmovies(data.results);
    } catch (error) {
      console.error("Error loading", error);
    }
  };

  const getSearch = (e) => {
    e.preventDefault();
    setCondition(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      message: {
        userName: Name,
        userpassword: password,
      },
    };
    navigate("/", { state: data });
    setName("");
    setPassword("");
  };

  return (
    <div className="container mt-8" data-bs-theme="dark">
      <Navbar
        setQuery={setQuery}
        getSearch={getSearch}
        setpageno={setpageno}
        setName={setName}
        setPassword={setPassword}
        Name={Name}
        password={password}
      />
      <br /><br /><br />
      <MovieCardList
        movies={condition ? movies : allmovies}
        query={query}
        condition={condition}
      />
      <LoginModal
        handleSubmit={handleSubmit}
        Name={Name}
        setName={setName}
        password={password}
        setPassword={setPassword}
      />
      <div className="d-flex justify-content-center align-items-center mt-2 mb-2">
        <div className="btn-group" role="group" aria-label="Pagination">
          <button
            className="btn btn-outline-light px-4 d-flex align-items-center"
            onClick={() => setpageno(pageno - 1)}
            disabled={pageno === 1}
          >
            <i className="bi bi-arrow-left me-2"></i>
            Previous
          </button>
          <button
            className="btn btn-outline-light px-4 d-flex align-items-center"
            onClick={() => setpageno(pageno + 1)}
          >
            Next
            <i className="bi bi-arrow-right ms-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
