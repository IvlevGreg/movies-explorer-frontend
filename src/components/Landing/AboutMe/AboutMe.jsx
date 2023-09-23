import cn from 'classnames';
import styles from './AboutMe.module.css';
import { Heading } from '../../Heading';
import { Divider } from '../../Divider';

import aboutMeImage from '../../../images/abouMeImage.jpeg';
import { Paragraph } from '../../Paragraph';
import { Link } from '../../Link';

export function AboutMe({ className }) {
  return (
    <section className={cn(className, styles.about)} id="student">
      <div className="main__content">

        <Heading size={2} className={styles.about__title}>Студент</Heading>
        <Divider color="white" className="main__divider" />

        <div className={styles.about__content}>
          <div className={styles['about__me-container']}>
            <div className={styles.me}>
              <h3 className={styles.me__title}>Гриша</h3>

              <Paragraph
                size={12}
                weight={500}
                className={styles.me__text}
                reset
              >
                Фронтенд-разработчик, 25 лет
              </Paragraph>
              <Paragraph reset className={styles.me__descr}>
                В школе любил программирование и математику, решал много задач,
                победил в двух математических олимпиадах,
                что позволило поступить в университет на бюджет вне конкурса
              </Paragraph>

              <Paragraph reset className={styles.me__descr}>
                Всегда хотел работать над большим проектом,
                но имел неправильное представление о работе разработчиком,
                поэтому принял решение пойти в строительство, а не в IT.
                Проработал 3 года в строительстве, но из-за большого количества
                оформительской работы, решил сменить сферу деятельности
              </Paragraph>
            </div>

            <Link
              href="https://github.com/IvlevGreg"
              underline={false}
              color="blue"
              className={styles.about__link}
            >
              Github
            </Link>
          </div>

          <img src={aboutMeImage} alt="Моя фотография" className={styles.about__img} />
        </div>
      </div>
    </section>

  );
}
