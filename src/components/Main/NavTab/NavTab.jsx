import cn from 'classnames';
import styles from './NavTab.module.css';
import { List } from '../../List';

const LINKS = [
  { children: <a href="#about" className={styles.nav__link}>О проекте</a> },
  { children: <a href="#technologies" className={styles.nav__link}>Технологии</a> },
  { children: <a href="#student" className={styles.nav__link}>Студент</a> },
];

export function NavTab({ className }) {
  return (
    <nav className={cn(className, styles.nav)}>
      <List elements={LINKS} className={styles.nav__list} />
    </nav>
  );
}
