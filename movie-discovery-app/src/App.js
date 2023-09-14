import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppRoutes from './Routes';
import Home from './Home';
import MovieDetails from './MovieDetails';
import SearchBar from './Search';
import MovieList from './MovieList';

function App() {
  return (
    <Router>
      <AppRoutes />
      <SearchBar />
      <Home />
      <MovieList />
      <MovieDetails />
    </Router>
  );
}

export default App;
