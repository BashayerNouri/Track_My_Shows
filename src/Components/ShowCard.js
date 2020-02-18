import React from "react";

function ShowCard({ show }) {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card">
        <img src={show.image.original} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{show.name}</h5>
          <p className="card-text">{show.summary}</p>
        </div>
      </div>
    </div>
  );
}

export default ShowCard;