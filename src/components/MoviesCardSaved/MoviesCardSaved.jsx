import cn from 'classnames';
import styles from './MoviesCardSaved.module.css';
import { Button } from '../Button';

export function MoviesCardSaved({
  className, link, alt, title, duration,
}) {
  // eslint-disable-next-line no-console
  const onClickRemoveLike = () => console.log('removed');
  return (
    <li className={cn(className, styles.movie)}>
      <Button
        variant="text"
        onClick={onClickRemoveLike}
        size="0"
        className={styles.movie__btn}
      >
        <img src={link} alt={alt || title} className={styles.movie__img} />
        <div className={styles.movie__container}>
          <p className={styles.movie__title}>{title}</p>

          <p className={styles.movie__duration}>
            {duration}
          </p>
        </div>
      </Button>
    </li>
  );
}
