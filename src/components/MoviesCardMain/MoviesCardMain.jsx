import cn from 'classnames';
import { useState } from 'react';
import styles from './MoviesCardMain.module.css';
import { Button } from '../Button';
import { MainApi } from '../../utils/Api/MainApi';

export function MoviesCardMain({
  className, movie = false,
}) {
  const {
    isInitialLiked, alt, normalizedDuration, ...apiMovie
  } = movie;

  const [isLiked, setIsLiked] = useState(isInitialLiked);

  const onClickLike = () => {
    console.log('1');

    MainApi.changeLikeCardStatus(apiMovie, isLiked)
      .then(() => setIsLiked((state) => !state))
      .catch(console.log);
  };
  const {
    image: link,
    nameRU: title,
  } = apiMovie;

  return (
    <li className={cn(className, styles.movie)}>
      <img src={link} alt={alt || title} className={styles.movie__img} />
      <div className={styles.movie__container}>
        <div className={styles.movie__content}>
          <p className={styles.movie__title}>{title}</p>
          <Button
            className={cn(styles.btn, { [styles.btn_like]: isLiked })}
            onClick={onClickLike}
          />
        </div>
        <p className={styles.movie__duration}>
          {normalizedDuration}
        </p>
      </div>
    </li>
  );
}
