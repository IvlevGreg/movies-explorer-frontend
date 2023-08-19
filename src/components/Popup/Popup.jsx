import cn from 'classnames';
import { useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import styles from './Popup.module.css';
import { Button } from '../Button';

export const Popup = ({
  children,
  className,
  onClose,
  isOpen,
}) => {
  const popupRef = useRef(null);
  const handleEscClose = useCallback((evt) => {
    if (evt.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    window.addEventListener('keydown', handleEscClose);
    return () => {
      window.removeEventListener('keydown', handleEscClose);
    };
  }, [handleEscClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isOpen]);

  const onOverflowClose = (evt) => {
    if (evt.target === popupRef.current) onClose();
  };

  return (
    createPortal(
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div
        className={cn(
          styles.popup,
          { [styles.popup_opened]: isOpen },
          className,
        )}
        ref={popupRef}
        onMouseDown={onOverflowClose}
      >
        <Button
          variant="text"
          className={styles.popup__button}
          onClick={onClose}
        />
        {children}
      </div>,
      document.body,
    ));
};
