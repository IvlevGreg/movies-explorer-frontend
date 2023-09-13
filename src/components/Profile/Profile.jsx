import { useForm } from 'react-hook-form';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { joiResolver } from '@hookform/resolvers/joi';
import styles from './Profile.module.css';
import { Label } from '../Label';
import { EmailController } from '../Controllers/EmailController';
import { NameController } from '../Controllers/NameController';
import { Button } from '../Button';
import { Divider } from '../Divider';
import { SignPages } from '../SignPages';
import { MainApi } from '../../utils/Api/MainApi';
import { CurrentUserContext } from '../../hooks/CurrentUserContext';
import { schemaProfileForm } from '../../utils/validation';
import { Paragraph } from '../Paragraph';

export function Profile({ className }) {
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const [formErrors, setFormErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessTextShow, setIsSuccessTextShow] = useState(false);
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(CurrentUserContext);

  const {
    control, watch, reset, formState: { errors, isDirty, isValid }, handleSubmit,
  } = useForm({
    defaultValues: {
      name: userData?.name || '', email: userData?.email || '',
    },
    resolver: joiResolver(schemaProfileForm),
  });

  useEffect(() => {
    const subscription = watch(() => {
      setFormErrors(null);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = async (data) => {
    setIsLoading(true);

    return MainApi.updateUserData(data)
      .then((newUserData) => {
        setFormErrors(null);
        setUserData(newUserData);
        setIsFormDisabled(true);
        setIsSuccessTextShow(true);
        reset(data);
      }).catch((e) => {
        setIsFormDisabled(false);
        setFormErrors(e);
        // eslint-disable-next-line no-console
        console.log(e);
      })
      .finally(() => setIsLoading(false));
  };

  const handleLogOut = () => MainApi.postSignOut()
    .then(() => {
      localStorage.setItem('savedMovies', JSON.stringify(''));
      localStorage.setItem('movies', JSON.stringify(''));

      navigate('/');
      setUserData(null);
    }).catch(setFormErrors);

  const controllers = (
    <>

      <Label
        direction="row"
        errorMessage={errors.name?.message}
        label="Имя"
      >
        <NameController
          control={control}
          className={styles.form__input}
          disabled={isFormDisabled}
        />
      </Label>
      <Divider color="gray" />
      <Label
        direction="row"
        errorMessage={errors.email?.message}
        label="E-mail"
      >
        <EmailController
          control={control}
          className={styles.form__input}
          disabled={isFormDisabled}
        />
      </Label>
    </>
  );

  const actionChildren = (
    <>

      <Button
        variant="text"
        type="button"
        size="m"
        color={formErrors && 'red'}
        isLoading={isLoading}
        disabled={(!isFormDisabled || (!isValid && isDirty) || !!formErrors) && !isDirty}
        onClick={() => {
          if (isFormDisabled) {
            setIsFormDisabled(false);
            setIsSuccessTextShow(false);
          } else {
            handleSubmit(onSubmit)();
          }
        }}
      >
        {isFormDisabled ? 'Редактировать' : 'Сохранить'}
      </Button>
      <Button
        variant="text"
        color="red"
        size="m"
        type="button"
        onClick={handleLogOut}
      >
        Выйти из аккаунта
      </Button>

      {isSuccessTextShow
        && (
        <Paragraph
          color="green"
          align="center"
        >
          Данные успешно изменены
        </Paragraph>
        )}
    </>
  );

  return (
    <SignPages
      title={userData?.name ? `Рады видеть, ${userData.name}!` : 'Рады видеть!'}
      controllers={controllers}
      handleSubmit={handleSubmit(onSubmit)}
      actionChildren={actionChildren}
      className={className}
      isLogo={false}
      formErrors={formErrors}
    />
  );
}
