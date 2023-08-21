import cn from 'classnames';
import styles from './NavigationModal.module.css';
import { Link } from '../../Link';
import profileIcon from '../../../images/profileIcon.svg';

const LINKS = [
  { text: 'Главная', href: '/' },
  { text: 'Фильмы', href: '/movies' }, {
    text: 'Сохранённые фильмы',
    href: '/saved-movies',
  }];

export function NavigationModal({ className, classNameMain, onClose }) {
  return (
    <ul className={cn(className, styles.nav__list)}>
      <div className={classNameMain}>
        {LINKS.map(({ text, href, icon }) => (
          <li className={styles.nav__item} key={href}>
            {icon && <img src={icon} alt={text} />}
            <Link
              to={href}
              type="NavLink"
              className={styles.nav__link}
              onClick={onClose}
              underline={false}
            >
              {text}
            </Link>
          </li>
        ))}
      </div>

      <li>
        <Link
          to="/profile"
          type="NavLink"
          className={styles.nav__link_small}
          underline={false}
          onClick={onClose}
        >
          Аккаунт
          <img src={profileIcon} alt="Аккаунт" />
        </Link>
      </li>
    </ul>
  );
}
