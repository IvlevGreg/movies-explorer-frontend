import { useEffect, useState } from 'react';
import { MoviesPage } from '../MoviesPage';
import { MoviesCardMain } from '../MoviesCardMain';
import { MoviesApi } from '../../utils/Api/MoviesApi';
import { mapMovies } from '../../utils/mapMovies';
import { MainApi } from '../../utils/Api/MainApi';
import { MOVIES_SCREEN_LIMITS } from '../../utils/constants/MOVIES_SCREEN_LIMITS';

export function Movies({ className }) {
  const [movies, setMovies] = useState([]);
  const [moviesStatus, setMoviesStatus] = useState('initial');
  const [movieError, setMovieError] = useState(null);

  useEffect(() => {
    if (moviesStatus !== 'initial') return;
    setMoviesStatus('loading');
    Promise.all([MoviesApi.getMovies(), MainApi.getMovies()])
      .then(([allMovies, likedMovie]) => {
        setMovies(mapMovies(allMovies, likedMovie));
        setMoviesStatus('success');
      }).catch((e) => {
        setMoviesStatus('error');
        setMovieError(e.message);
      });
  }, [moviesStatus]);

  const mapMoviesComponent = {
    initial: <h1>loading</h1>,
    loading: <h1>loading</h1>,
    success: <MoviesPage
      localStorageKey="movies"
      movies={movies}
      limits={MOVIES_SCREEN_LIMITS}
      className={className}
      CardComponent={MoviesCardMain}
    />,
    error: (
      <>
        <h1>упс... произошла ошибка</h1>
        <h2>{movieError}</h2>
      </>
    ),
  };

  return (mapMoviesComponent[moviesStatus]);
}
