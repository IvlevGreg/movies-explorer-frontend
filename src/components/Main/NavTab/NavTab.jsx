import cn from 'classnames';
import styles from './NavTab.module.css';
import { Link } from '../../Link';

const LINKS = [
  { href: '#about', text: 'О проекте' },
  { href: '#technologies', text: 'Технологии' },
  { href: '#student', text: 'Студент' }];

export function NavTab({ className }) {
  return (
    <section className={cn(className, styles.nav)}>
      <nav className="main__content">
        <ul className={styles.nav__list}>
          {LINKS.map(({ text, href }) => (
            <li key={href} className={styles.nav__item}>
              <Link
                href={href}
                type="a"
                className={styles.nav__link}
                size="m"
              >
                {text}
              </Link>
            </li>
          ))}

        </ul>
      </nav>
    </section>
  );
}
