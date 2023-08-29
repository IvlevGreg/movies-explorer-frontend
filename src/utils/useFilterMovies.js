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

  const handleSubmit = ({ search, filter }) => {
    localStorage.setItem(localStorageKey, JSON.stringify({ search, filter }));
    filterMovies(search, filter);
  };

  useEffect(() => {
    filterMovies(search, filter);
  }, [movies]);

  return { filteredMovies, handleSubmit };
};
