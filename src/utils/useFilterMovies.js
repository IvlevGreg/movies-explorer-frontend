import { useEffect, useState } from 'react';
import { SHORT_MOVIE_DURATION_MINUTES } from './constants/SHORT_MOVIE_DURATION_MINUTES';

export const useFilterMovies = (movies, { search, filter }, localStorageKey) => {
  const [filteredMovies, setFilteredMovies] = useState([]);

  const filterByDuration = (movie, isFilter) => !isFilter
    || movie.duration <= SHORT_MOVIE_DURATION_MINUTES;

  const filterMovies = (searchStr, isFilter) => {
    const lowerSearchStr = searchStr?.toLowerCase();

    setFilteredMovies(() => [
      ...movies.filter(
        (movie) => (
          movie.nameRU.toLowerCase().includes(lowerSearchStr)
            || movie.nameEN.toLowerCase().includes(lowerSearchStr))
          && filterByDuration(movie, isFilter),
      )]);
  };

  const handleSubmit = ({ search: searchStr, filter: isFilter }) => {
    localStorage.setItem(localStorageKey, JSON.stringify({ search: searchStr, filter: isFilter }));

    filterMovies(searchStr, isFilter);
  };

  useEffect(() => {
    filterMovies(search, filter);
  }, [movies]);

  return { filteredMovies, handleSubmit };
};
