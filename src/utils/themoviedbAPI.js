import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '663bd5fd8d905b7ce2d57e9867d3492e',
};

export const getPopularMovies = async (page = 1) => {
  try {
    const { data } = await axios.get('/trending/movie/day', {
      params: {
        page,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMoviesByQuery = async (query, page = 1) => {
  try {
    const { data } = await axios.get('/search/movie', {
      params: {
        query,
        page,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMovieById = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMovieCredits = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/credits`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMovieReviews = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/reviews`);
    return data;
  } catch (error) {
    throw error;
  }
};
