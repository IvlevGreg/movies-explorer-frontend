import cn from 'classnames';
import styles from './MoviesCardList.module.css';
import { MoviesCard } from './MoviesCard';

export function MoviesCardList({ className, movies }) {
  return (
    <ul className={cn(className, styles.movies)}>
      {movies.map((movie) => (
        <MoviesCard
          {...movie}
          key={movie.link}
          className={styles.movies__item}
        />
      ))}
    </ul>
  );
}
