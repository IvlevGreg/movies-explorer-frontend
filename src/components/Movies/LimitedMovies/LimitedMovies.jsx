import { useGetLimitedMovies } from '../../../utils/useGetLimitedMovies';
import { MoviesPage } from '../../MoviesPage';

export function LimitedMovies({
  className, movies, CardComponent, limits,
}) {
  const {
    limitMovies,
    callback: handleMoreMovie,
    isAllMoviesShow,
  } = useGetLimitedMovies(movies, limits);

  return (
    <MoviesPage
      movies={limitMovies}
      handleMoreMovie={handleMoreMovie}
      isAllMoviesShow={isAllMoviesShow}
      className={className}
      CardComponent={CardComponent}
    />
  );
}
