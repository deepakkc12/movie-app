import React from 'react';
import Header from './Header';
import MovieList from './MovieList';
import inception from "../assets/images/inception.webp";
import interstellar from "../assets/images/interstellar.jpg";
import darkKnight from "../assets/images/darkKnight.webp"

const MoviesPage = () => {
  const movies = [
    {
      title: "Inception",
      image: inception,
      description: "A mind-bending thriller by Christopher Nolan."
    },
    {
      title: "The Dark Knight",
      image: darkKnight,
      description: "A gripping tale of Batman and Joker."
    },
    {
      title: "Interstellar",
      image: interstellar,
      description: "A space exploration epic."
    }
  ];

  return (
    <>
      <Header />
      <MovieList movies={movies} />
    </>
  );
};

export default MoviesPage;
