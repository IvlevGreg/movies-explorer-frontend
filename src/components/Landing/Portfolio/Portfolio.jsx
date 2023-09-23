import cn from 'classnames';
import styles from './Portfolio.module.css';
import { Divider } from '../../Divider';
import { Link } from '../../Link';

const LINKS = [{
  href: 'https://github.com/IvlevGreg/how-to-learn', text: 'Статичный сайт',
}, {
  href: 'https://github.com/IvlevGreg/russian-travel', text: 'Адаптивный сайт',
}, {
  href: 'https://github.com/IvlevGreg/react-mesto-api-full-gha', text: 'Одностраничное приложение',
}];

export function Portfolio({ className }) {
  return (
    <section className={cn(className, styles.portfolio)}>
      <div className="main__content">

        <h2 className={styles.portfolio__title}> Портфолио</h2>
        <ul className={styles.portfolio__list}>
          {LINKS.map(({ href, text }, i) => (
            <li key={href} className={styles.portfolio__item}>
              <Link
                href={href}
                target="_blank"
                underline={false}
                className={styles.portfolio__link}
              >
                <div className={styles['portfolio__link-text']}>
                  {text}
                </div>
                {i !== LINKS.length - 1 && <Divider color="white" />}
              </Link>
            </li>
          ))}

        </ul>
      </div>
    </section>
  );
}
