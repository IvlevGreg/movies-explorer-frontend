import { useEffect, useState } from 'react';

export const useFilterMovies = (movies, { search, filter }, localStorageKey) => {
  const [filteredMovies, setFilteredMovies] = useState([]);

  const filterByDuration = (movie, isFilter) => !isFilter || movie.duration <= 40;

  const filterMovies = (searchStr, isFilter) => {
    setFilteredMovies(() => [
      ...movies.filter(
        (movie) => (
          movie.nameRU.includes(searchStr) || movie.nameEN.includes(searchStr))
          && filterByDuration(movie, isFilter),
      )]);
  };

  const handleSubmit = ({ searchStr, isFilter }) => {
    localStorage.setItem(localStorageKey, JSON.stringify({ searchStr, isFilter }));
    filterMovies(searchStr, isFilter);
  };

  useEffect(() => {
    filterMovies(search, filter);
  }, [movies]);

  return { filteredMovies, handleSubmit };
};
