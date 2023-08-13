import cn from 'classnames';
import styles from './AboutProject.module.css';
import { Heading } from '../../Heading';
import { Divider } from '../../Divider';
import { List } from '../../List';
import { Paragraph } from '../../Paragraph';

const ABOUT_LIST_ELEMENTS = [{
  children:
  <div>
    <Paragraph className={styles['about__stages-title']} size={18}>
      Дипломный проект включал 5 этапов
    </Paragraph>
    <Paragraph className={styles['about__stages-text']} size={11}>
      Составление плана, работу над бэкендом, вёрстку,
      добавление функциональности и финальные доработки.
    </Paragraph>
  </div>,
}, {
  children:
  <div>
    <Paragraph className={styles['about__stages-title']} size={18}>
      На выполнение диплома ушло 5 недель
    </Paragraph>
    <Paragraph className={styles['about__stages-text']} size={11}>
      У каждого этапа был мягкий и жёсткий дедлайн,
      которые нужно было соблюдать, чтобы успешно защититься.
    </Paragraph>
  </div>,
}];

export function AboutProject({ className }) {
  return (
    <div className={cn(className, styles.about)} id="about">
      <Heading size={2} className={styles.about__title}>О проекте</Heading>
      <Divider color="white" className={styles.about__divider} />
      <List elements={ABOUT_LIST_ELEMENTS} className={styles.about__list} />

      <div className={styles['time-line']}>
        <div className={styles['time-line__container']}>
          <Paragraph
            size={11}
            color="black"
            className={cn(
              styles['time-line__time'],
              styles['time-line__time_color_green'],
            )}
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

  );
}
