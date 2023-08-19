import cn from 'classnames';
import styles from './Label.module.css';
import { FormErrorText } from '../FormErrorText';
import { Paragraph } from '../Paragraph';

export function Label({
  className, children, label, errorMessage, direction = 'column', ...rest
}) {
  const classNames = cn(
    className,
    styles.label,
    { [styles.label_error]: errorMessage },
    // direction
    { [styles.label_column_column]: direction === 'column' },
    { [styles.label_column_row]: direction === 'row' },
  );

  return (
    <label {...rest} className={classNames}>
      {label && (
      <Paragraph reset className={styles.label__text}>
        {label}
      </Paragraph>
      )}
      {children}
      {errorMessage
          && (
          <FormErrorText
            className={styles['label__error-text']}
          >
            {errorMessage}
          </FormErrorText>
          )}
    </label>
  );
}
