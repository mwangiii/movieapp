import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
        console.log('Response:', response);
        if (!response.ok) {
          throw new Error('Failed to fetch movie details');
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <p>Release Date: {movie.release_date}</p>
      <p>Runtime: {movie.runtime} minutes</p>
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieDetails;
