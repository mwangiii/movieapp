const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchTopMovies = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data.results.slice(0, 10); // Get the top 10 movies
  } catch (error) {
    throw error;
  }
};
