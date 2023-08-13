import cn from 'classnames';
import styles from './AboutMe.module.css';
import { Heading } from '../../Heading';
import { Divider } from '../../Divider';

import aboutMeImage from '../../../images/abouMeImage.jpg';
import { Paragraph } from '../../Paragraph';
import { Link } from '../../Link';

export function AboutMe({ className }) {
  return (
    <div className={cn(className, styles.about)}>
      <Heading size={2} className={styles.about__title}>Студент</Heading>
      <Divider color="white" className="main__divider" />

      <div className={styles.about__content}>

        <div>
          <div className={styles.me}>
            <h3 className={styles.me__title}>Виталий</h3>
            <Paragraph size={12} weight={500} reset>Фронтенд-разработчик, 30 лет</Paragraph>
            <Paragraph size={11} reset>
              Я родился и живу в Саратове, закончил факультет экономики СГУ.
              У меня есть жена и дочь.
              Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
              С 2015 года работал в компании «СКБ Контур».
              После того, как прошёл курс по веб-разработке,
              начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </Paragraph>
          </div>
          <Link
            href="https://github.com/IvlevGreg"
            underline={false}
            className={styles.about__link}
          >
            Github
          </Link>
        </div>

        <img src={aboutMeImage} alt="Моя фотография" className={styles.about__img} />
      </div>
    </div>

  );
}
