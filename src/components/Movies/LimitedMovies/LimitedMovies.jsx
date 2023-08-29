import { useGetLimitedMovies } from '../../../utils/useGetLimitedMovies';
import { MoviesCardList } from '../../MoviesCardList';

export function LimitedMovies({
  className, movies, CardComponent, limits,
}) {
  const {
    limitMovies,
    callback: handleMoreMovie,
    isAllMoviesShow,
  } = useGetLimitedMovies(movies, limits);

  return (
    <MoviesCardList
      movies={limitMovies}
      className={className}
      handleMoreMovie={handleMoreMovie}
      isAllMoviesShow={isAllMoviesShow}
      CardComponent={CardComponent}
    />
  );
}
