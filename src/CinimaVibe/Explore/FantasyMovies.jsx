import React from "react";
import { useState,useEffect } from "react";
import Navbar from "./NavBar";

export default function FantasyMovies(){
    const [Movies , setMovies] = useState([])
    const [pageno, setpageno] = useState(1)
    const genreId = 14;
    const API_KEY = '97046a7188e5b2b6333420cfa941c6e6'
   
    const GetMovies = async ()=>{
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=${pageno}`)
        const data = await response.json()
        setMovies(data.results)
           }
           // https://api.themoviedb.org/3/discover/movie?api_key=97046a7188e5b2b6333420cfa941c6e6
    useEffect(()=>{
        
        GetMovies()
         
   },[pageno])

   return(
    <div className="container mt-12">
      <Navbar />
                <div className="row mt-4">
                   {Movies.map((movie) => (
            <div key={movie.id} className="col-sm-6 col-md-3 mb-4 ">
              <div className="card h-50 shadow-sm">
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : "https://via.placeholder.com/500x750?text=No+Image"
                  }
                  className="card-img-top"
                  alt={movie.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <div className="d-flex justify-content-between mt-2">
                    <span>⭐ {movie.vote_average?.toFixed(1)}</span>
                    <span>{movie.adult ? "18+" : "PG-13"}</span>
                   
                  </div>
                  <p className="mt-2">
                    Release Date:{" "}
                    {movie.release_date ? movie.release_date : "N/A"}
                  </p>
                </div>
              </div>
            </div>
          ))
        
        }
        </div>
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