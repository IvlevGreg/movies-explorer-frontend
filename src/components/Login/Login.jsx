import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { joiResolver } from '@hookform/resolvers/joi';
import { Label } from '../Label';
import { EmailController } from '../Controllers/EmailController';
import { PasswordController } from '../Controllers/PasswordController';
import { SignPages } from '../SignPages';
import { Button } from '../Button';
import styles from '../SignPages/SignPages.module.css';
import { Link } from '../Link';
import { MainApi } from '../../utils/Api/MainApi';
import { CurrentUserContext } from '../../hooks/CurrentUserContext';
import { schemaLoginForm } from '../../utils/validation';

const DEFAULT_VALUES = { email: '', password: '' };

export function Login({ className }) {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setUserData } = useContext(CurrentUserContext);

  const {
    control, watch, reset, formState: { errors, isSubmitted, isValid }, handleSubmit,
  } = useForm({
    defaultValues: DEFAULT_VALUES,
    resolver: joiResolver(schemaLoginForm),
  });

  useEffect(() => {
    const subscription = watch(() => setFormErrors(null));
    return () => subscription.unsubscribe();
  }, [watch]);

  // eslint-disable-next-line no-console
  const onSubmit = async (data) => {
    setIsLoading(true);
    return MainApi.postSignIn(data)
      .then(() => MainApi.getUsersMe()
        .then((user) => {
          navigate('/movies');
          setUserData(user);
          reset(DEFAULT_VALUES);
        })
        .catch(() => setFormErrors('Не удалось получить пользователя')))
      .catch(setFormErrors)
      .finally(() => setIsLoading(false));
  };

  const controllers = (
    <>
      <Label
        errorMessage={errors.email?.message}
        label="E-mail"
      >
        <EmailController control={control} />
      </Label>

      <Label
        errorMessage={errors.password?.message}
        label="Пароль"
      >
        <PasswordController control={control} />
      </Label>
    </>
  );

  const actionChildren = (
    <>
      <Button
        type="submit"
        variant="primary"
        color="blue"
        size="l"
        disabled={(isSubmitted && !isValid) || !!formErrors}
        isLoading={isLoading}
        block
      >
        Войти
      </Button>
      <p className={styles.page__signin}>
        Ещё не зарегистрированы?
        {' '}
        <Link
          to="/signup"
          type="LinkRouter"
          color="blue"
          underline={false}
        >
          Регистрация
        </Link>
      </p>
    </>
  );

  return (
    <SignPages
      title="Рады видеть!"
      controllers={controllers}
      handleSubmit={handleSubmit(onSubmit)}
      actionChildren={actionChildren}
      className={className}
      formErrors={formErrors}
    />
  );
}
