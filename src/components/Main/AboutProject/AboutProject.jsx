import cn from 'classnames';
import styles from './AboutProject.module.css';
import { Heading } from '../../Heading';
import { Divider } from '../../Divider';
import { Paragraph } from '../../Paragraph';

const ABOUT_LIST_ELEMENTS = [{
  title: 'Дипломный проект включал 5 этапов',
  text: 'Составление плана, работу над бэкендом, вёрстку, '
      + 'добавление функциональности и финальные доработки.',
}, {
  title: 'На выполнение диплома ушло 5 недель',
  text: 'У каждого этапа был мягкий и жёсткий дедлайн, '
      + 'которые нужно было соблюдать, чтобы успешно защититься.',
}];

export function AboutProject({ className }) {
  return (
    <section className={cn(className, styles.about)} id="about">
      <div className="main__content">

        <Heading size={2} className={styles.about__title}>О проекте</Heading>
        <Divider color="white" className="main__divider" />

        <ul className={styles.about__list}>
          {ABOUT_LIST_ELEMENTS.map(({ title, text }) => (
            <li key={title}>
              <Paragraph className={styles['about__stages-title']} size={18}>
                {title}
              </Paragraph>
              <Paragraph className={styles['about__stages-text']} size={11}>
                {text}
              </Paragraph>
            </li>
          ))}
        </ul>

        <div className={styles['time-line']}>
          <div className={styles['time-line__container']}>
            <Paragraph
              size={11}
              color="black"
              className={cn(styles['time-line__time'], styles['time-line__time_color_green'])}
            >
              1 неделя
            </Paragraph>
            <Paragraph
              size={11}
              color="grey"
              className={styles['time-line__text']}
            >
              Back-end
            </Paragraph>
          </div>

          <div className={styles['time-line__container']}>
            <Paragraph
              size={11}
              className={styles['time-line__time']}
            >
              4 недели
            </Paragraph>
            <Paragraph
              size={11}
              color="grey"
              className={styles['time-line__text']}
            >
              Front-end
            </Paragraph>
          </div>
        </div>
      </div>
    </section>

  );
}
