import cn from 'classnames';
import styles from './MoviesCardList.module.css';
import { Button } from '../Button';

export function MoviesCardList({
  className,
  movies,
  CardComponent,
  handleMoreMovie,
  isAllMoviesShow = true,
}) {
  if (!Array.isArray(movies)) {
    return <h1 className="h-text-center">Упс... Непредвиденная ошибка, попробуйте еще раз</h1>;
  }

  if (movies.length === 0) {
    return <h1 className="h-text-center">Упс... не удалось найти фильмы</h1>;
  }

  return (
    <div className={styles.content}>
      <ul className={cn(className, styles.movies)}>
        {movies.map((movie, i) => (
          <CardComponent
            movie={movie}
            key={movie.thumbnail || movie.link || i}
            className={styles.movies__item}
          />
        ))}
      </ul>

      {!isAllMoviesShow
        && (
          <Button
            color="gray"
            block
            className={styles.movies__btn}
            onClick={handleMoreMovie}
          >
            Ещё
          </Button>
        )}
    </div>
  );
}
