import cn from 'classnames';
import { useContext, useState } from 'react';
import styles from './Navigation.module.css';
import { Button } from '../../Button';
import burgerIcon from '../../../images/burgerIcon.svg';
import { Link } from '../../Link';
import { NavigationModal } from '../NavigationModal';
import { Popup } from '../../Popup';
import { CurrentUserContext } from '../../../hooks/CurrentUserContext';

export function Navigation({ className }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { userData } = useContext(CurrentUserContext);
  const isAuth = !!userData;
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  const notAuthComponent = (
    <div>
      <Link
        to="/signup"
        type="LinkRouter"
        underline={false}
        size="m"
      >
        Регистрация
      </Link>
      <Link
        to="/signin"
        type="LinkRouter"
        variant="primary"
        color="green"
        size="m"
        underline={false}
      >
        Войти
      </Link>
    </div>
  );

  const AuthComponent = (
    <>
      <Button
        variant="text"
        size="0"
        onClick={openModal}
        className={styles.nav__burger}
      >
        <img src={burgerIcon} alt="Бургер меню" />
      </Button>

      <Popup
        isOpen={isModalVisible}
        onClose={closeModal}
        className={styles.nav__popup}
      >
        <div className={styles.popup__content}>
          <NavigationModal
            className={styles.nav__list}
            classNameMain={styles.nav__main}
            onClose={closeModal}
          />
        </div>
      </Popup>

      <NavigationModal
        className={cn(styles.nav__list, styles.nav__list_desktop)}
        classNameMain={styles.nav__main}
        onClose={closeModal}
      />
    </>
  );

  return (
    <nav className={cn(className, styles.nav, { [styles.nav_auth_no]: !isAuth })}>
      {isAuth ? AuthComponent : notAuthComponent}
    </nav>
  );
}
