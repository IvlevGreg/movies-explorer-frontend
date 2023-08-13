import cn from 'classnames';
import styles from './Paragraph.module.css';

export function Paragraph({
  className, size, children, color = 'white', align, weight, reset,
}) {
  const classNames = cn(
    className,
    styles.p,
    // color]
    {
      [styles.paragraph_color_grey]: color === 'grey',
      [styles.paragraph_color_white]: color === 'white',
      [styles.paragraph_color_black]: color === 'black',

      // align
      [styles.paragraph_align_center]: align === 'center',
      // align
      [styles.paragraph_reset]: reset,

      // size

      [styles.paragraph_size_11]: size === 11,
      [styles.paragraph_size_12]: size === 12,
      [styles.paragraph_size_18]: size === 18,
      // weight
      [styles.paragraph_weight_500]: weight === 500,
    },

  );
  return (
    <p className={classNames}>{children}</p>
  );
}
