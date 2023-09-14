import React, { useState, useEffect } from 'react';
import { fetchTopMovies } from './api';
import MovieList from './MovieList';
import SearchBar from './Search';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTopMovies = async () => {
      try {
        const topMovies = await fetchTopMovies();
        setMovies(topMovies);
      } catch (error) {
        console.error('Error fetching top movies:', error);
      }
    };

    getTopMovies();
  }, []);

  // Define the onSearch function that you pass to SearchBar
  const onSearch = async (query) => {
    // You can perform the movie search here and update the 'movies' state
    // For example:
    // const searchResults = await performMovieSearch(query);
    // setMovies(searchResults);
  };

  return (
    <div className="home">
      <h1>Top 10 Movies</h1>
      <SearchBar onSearch={onSearch} /> {/* Pass the onSearch function to SearchBar */}
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
