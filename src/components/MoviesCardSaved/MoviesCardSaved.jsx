import cn from 'classnames';
import { useState } from 'react';
import styles from './MoviesCardSaved.module.css';
import { Button } from '../Button';
import { MainApi } from '../../utils/Api/MainApi';

export function MoviesCardSaved({
  className, movie,
}) {
  const [isLiked, setIsLiked] = useState(true);

  if (!isLiked) return;
  const {
    link, alt, title, normalizedDuration,
  } = movie;

  const onClickRemoveLike = () => {
    MainApi.changeLikeCardStatus(movie, true)
      .then(() => setIsLiked((state) => !state))
      .catch(console.log);
  };
  // eslint-disable-next-line no-console
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
            {normalizedDuration}
          </p>
        </div>
      </Button>
    </li>
  );
}
