import cn from 'classnames';
import styles from './Techs.module.css';
import { Heading } from '../../Heading';
import { Divider } from '../../Divider';
import { Paragraph } from '../../Paragraph';

const TECHS_LIST = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];

export function Techs({ className }) {
  return (
    <div className={cn(className, styles.techs)}>
      <Heading size={2} className={styles.techs__title}>
        Технологии
      </Heading>
      <Divider color="black" className="main__divider" />

      <h3 className={styles['techs__technologies-title']}>7 технологий</h3>
      <Paragraph
        size={11}
        align="center"
        className={styles['techs__technologies-subtitle']}
      >
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </Paragraph>
      <ul className={styles['techs__technologies-list']}>
        {TECHS_LIST.map((tech) => (
          <li key={tech} className={styles['techs__technologies-item']}>
            <Paragraph
              size={12}
              align="center"
              className={styles['techs__technologies-text']}
            >
              {tech}
            </Paragraph>
          </li>
        ))}
      </ul>
    </div>
  );
}
