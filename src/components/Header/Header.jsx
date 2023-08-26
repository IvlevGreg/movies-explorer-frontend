import cn from 'classnames';
import styles from './Header.module.css';
import logo from '../../images/logo.svg';
import { Link } from '../Link';
import { Navigation } from './Navigation';

export function Header({ className, color = 'main' }) {
  const classNamesHeader = cn(className, styles.header, {
    [styles.header_color_main]: color === 'main',
    [styles.header_color_secondary]: color === 'secondary',
  });

  return (
    <header className={classNamesHeader}>
      <div className={cn('main__content', styles.header__content)}>
        <Link to="/" type="LinkRouter">
          <img src={logo} alt="Логотип" />
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
