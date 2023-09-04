import { useEffect, useState } from 'react';

export const useFilterMovies = (movies, { search, filter }, localStorageKey) => {
  const [filteredMovies, setFilteredMovies] = useState([]);

  const filterByDuration = (movie, isFilter) => !isFilter || movie.duration <= 40;

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
    localStorage.setItem(localStorageKey, JSON.stringify({ searchStr, isFilter }));

    filterMovies(searchStr, isFilter);
  };

  useEffect(() => {
    filterMovies(search, filter);
  }, [movies]);

  return { filteredMovies, handleSubmit };
};
