import React from 'react';

const Movie = ({ title, image, description }) => {
  return (
    <div className="col-md-4 mb-4 ">
    <div className="card shadow-sm px-0 rounded bg-dark">
      <img src={image} className="card-img-top w-50 mx-auto" alt={title} />
      <div className="card-body text-white">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  </div>
  );
};

export default Movie;
