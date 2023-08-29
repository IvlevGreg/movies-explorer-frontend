import { useEffect, useState } from 'react';
import { MoviesPage } from '../MoviesPage';
import { MoviesCardMain } from '../MoviesCardMain';
import { MoviesApi } from '../../utils/Api/MoviesApi';
import { mapMovies } from '../../utils/mapMovies';
import { MainApi } from '../../utils/Api/MainApi';
import { useGetLimitedMovies } from '../../utils/useGetLimitedMovies';
import { LimitedMovies } from './LimitedMovies';

const LIMITS = { mobile: 4, tablet: 8, desktop: 12 };

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
    success: <LimitedMovies
      movies={movies}
      limits={LIMITS}
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
