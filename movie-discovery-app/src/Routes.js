import React from 'react';
import { Route, Outlet, Link, useParams } from 'react-router-dom'; 

import Home from './Home'; 
import MovieDetails from './MovieDetails'; 

const AppRoutes = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default AppRoutes;
