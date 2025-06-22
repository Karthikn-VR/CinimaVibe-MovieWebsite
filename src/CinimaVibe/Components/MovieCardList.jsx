export default function MovieCardList({ movies, query, condition }) {
  if (!movies || movies.length === 0 && condition) {
    return <div className="text-center mt-4"><h5>No movies found for "{query}"</h5></div>;
  }

  return (
    <div className="row mt-4">
      {movies.map((movie) => (
        <div key={movie.id} className="col-sm-6 col-md-3 mb-4">
          <div className="card h-100 border border-1 border-grey shadow-lg">
            <img
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/500x750?text=No+Image"}
              className="card-img-top"
              alt={movie.title}
              style={{ height: "400px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">{movie.title.length > 21 ? movie.title.slice(0, 21) + "..." : movie.title}</h5>
              <div className="d-flex justify-content-between">
                <span>⭐ {movie.vote_average?.toFixed(1)}</span>
                <span>{movie.adult ? "18+" : "PG-13"}</span>
              </div>
              <p className="mt-2">Release Date: {movie.release_date || "N/A"}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
