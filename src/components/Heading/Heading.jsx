import cn from 'classnames';
import styles from './Heading.module.css';

export const Heading = ({
  className, size, children, color = 'white',
}) => {
  const classNames = cn(
    className,
    {
      [styles.heading_color_white]: color === 'white',
      [styles.heading_color_grey]: color === 'grey',
    },
  );

  const map = {
    1: <h1 className={cn(classNames, styles.heading_size_1)}>{children}</h1>,
    2: <h2 className={cn(classNames, styles.heading_size_2)}>{children}</h2>,
    3: <h3 className={cn(classNames, styles.heading_size_3)}>{children}</h3>,
  };
  return (
    map[size]
  );
};
