import cn from 'classnames';
import styles from './Header.module.css';
import logo from '../../images/logo.svg';
import { Link } from '../Link';
import { Navigation } from './Navigation';

export function Header({ className }) {
  return (
    <header className={cn(className, styles.header)}>
      <div className={cn('main__content', styles.header__content)}>

        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link href="/"><img src={logo} alt="Логотип" /></Link>
        <Navigation />

      </div>
    </header>
  );
}
