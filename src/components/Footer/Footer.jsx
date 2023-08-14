import cn from 'classnames';
import styles from './Footer.module.css';
import { Paragraph } from '../Paragraph';
import { Divider } from '../Divider';
import { Link } from '../Link';

const LINKS = [{
  href: 'https://practicum.yandex.ru', text: 'Яндекс.Практикум',
}, {
  href: 'https://github.com/IvlevGreg', text: 'Github',
}];

export function Footer({ className }) {
  return (
    <footer className={cn(className, styles.footer)}>
      <div className="main__content">

        <Paragraph
          size={12}
          color="grey"
          align="center"
          className={styles.footer__title}
        >
          Учебный проект Яндекс.Практикум х BeatFilm.
        </Paragraph>
        <Divider color="gray" className={styles.footer__divider} />

        <div className={styles.footer_content}>
          <ul className={styles.footer__list}>
            {LINKS.map(({ text, href }) => (
              <li key={href} className={styles.footer__item}>
                <Link
                  target="_blank"
                  underline={false}
                  href={href}
                  className={styles.footer__link}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          <Paragraph size={12} color="grey" align="center" reset>
            ©2020
          </Paragraph>
        </div>
      </div>
    </footer>
  );
}
