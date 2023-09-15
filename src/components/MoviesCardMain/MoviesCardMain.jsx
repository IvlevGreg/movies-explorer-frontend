import cn from 'classnames';
import { useState } from 'react';
import styles from './MoviesCardMain.module.css';
import { Button } from '../Button';
import { MainApi } from '../../utils/Api/MainApi';
import { Link } from '../Link';

export function MoviesCardMain({
  className, movie = false,
}) {
  const {
    isInitialLiked, alt, normalizedDuration, ...apiMovie
  } = movie;

  const [isLiked, setIsLiked] = useState(isInitialLiked);

  const onClickLike = (e) => {
    e.stopPropagation();
    e.preventDefault();
    MainApi.changeLikeCardStatus(apiMovie, isLiked)
      .then(() => setIsLiked((state) => !state))
      // eslint-disable-next-line no-console
      .catch(console.log);
  };
  const {
    image: link, nameRU: title,
  } = apiMovie;

  return (
    <li className={cn(className, styles.movie)}>
      <Link
        className={styles.movie__btn}
        underline={false}
        href={apiMovie.trailerLink}
        target="_blank"
      >
        <img src={link} alt={alt || title} className={styles.movie__img} />
        <div className={styles.movie__container}>
          <div className={styles.movie__content}>
            <p className={styles.movie__title}>{title}</p>
            <Button
              className={cn(
                styles.btn,
                { [styles.btn_like]: isLiked },
              )}
              onClick={onClickLike}
            />
          </div>
          <p className={styles.movie__duration}>
            {normalizedDuration}
          </p>
        </div>
      </Link>
    </li>
  );
}
