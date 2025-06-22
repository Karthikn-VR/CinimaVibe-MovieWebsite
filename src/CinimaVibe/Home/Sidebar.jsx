export default function Sidebar({ onSelect, message }) {
  const genres = [
    "Action",
    "Adventure",
    "Fantasy",
    "Comedy",
    "Sci-Fi",
    "Romance",
    "Animation",
    "Horror",
    "Family",
    "Drama",
    "Back To Home",
  ];

  return (
    <div
      className="offcanvas offcanvas-start"
      data-bs-scroll="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      id="offcanvasWithBothOptions"
      aria-labelledby="offcanvasWithBothOptionsLabel"
      style={{ background: "#121212", color: "#e0e0e0" }}
    >
      <div className="offcanvas-header border-bottom border-secondary">
        <h5 className="offcanvas-title text-white" id="offcanvasWithBothOptionsLabel">
          Explore Movies
        </h5>
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>

      <div className="offcanvas-body d-flex flex-column justify-content-between px-3 py-4">
        <div className="d-grid gap-3">
          {genres.map((genre, index) => (
            <button
              key={index}
              className="btn w-100 text-start px-3 py-2 text-white border-0 genre-btn"
              style={{
                backgroundColor: "#1e1e1e",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: "500",
              }}
              onClick={() => onSelect(index + 1)}
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              {genre}
            </button>
          ))}
        </div>

        {message && Object.keys(message).length > 0 && (
          <div className="mt-4 p-3 d-flex align-items-center bg-dark rounded-3 shadow-sm border border-secondary">
            <img
              src={`https://ui-avatars.com/api/?name=${message.userName}&background=3b3b3b&color=fff&rounded=true&size=64`}
              alt="User Avatar"
              className="rounded-circle me-3"
              style={{ width: "48px", height: "48px" }}
            />
            <div>
              <div className="text-muted small">Logged in as</div>
              <div className="fw-bold text-white">{message.userName}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
