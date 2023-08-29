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
  console.log(limitMovies);
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
