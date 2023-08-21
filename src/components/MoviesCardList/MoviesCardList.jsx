import cn from 'classnames';
import styles from './MoviesCardList.module.css';
import { Button } from '../Button';

const LIMIT = 7;

export function MoviesCardList({ className, movies, CardComponent }) {
  return (
    <div className={styles.content}>
      <ul className={cn(className, styles.movies)}>
        {movies.map((movie, i) => (
          <CardComponent
            {...movie}
            // вернуть key после получения уникальных карточек
            // key={movie.link }
          /* eslint-disable-next-line react/no-array-index-key */
            key={i}
            className={styles.movies__item}
          />
        ))}
      </ul>
      {movies.length > LIMIT
          && <Button color="gray" block className={styles.movies__btn}>Ещё</Button>}
    </div>
  );
}
