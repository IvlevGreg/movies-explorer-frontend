import cn from 'classnames';
import React, { useState } from 'react';
import styles from './Navigation.module.css';
import { Button } from '../../Button';
import burgerIcon from '../../../images/burgerIcon.svg';
import { Link } from '../../Link';

const IS_AUTH = false;

export function Navigation({ className }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const notAuthComponent = (
    <div>
      <Link
        href="/signup"
        underline={false}
        size="m"
      >
        Регистрация
      </Link>
      <Link
        href="/signin"
        variant="primary"
        color="green"
        size="m"
        underline={false}
      >
        Войти
      </Link>
    </div>
  );

  return (
    <nav className={cn(className, styles.nav)}>
      {IS_AUTH
        ? (
          <Button variant="text" onClick={() => setIsModalVisible(true)}>
            <img src={burgerIcon} alt="Бургер меню" />

            {isModalVisible && '1'}
          </Button>
        )
        : (
          notAuthComponent
        )}
    </nav>
  );
}
