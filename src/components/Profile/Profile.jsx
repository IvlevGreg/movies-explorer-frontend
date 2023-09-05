import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
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

export function Profile({ className }) {
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const [formErrors, setFormErrors] = useState(null);
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(CurrentUserContext);

  const { control, formState: { errors, isDirty, isValid }, handleSubmit } = useForm({
    defaultValues: {
      name: userData?.name || '', email: userData?.email || '',
    },
    resolver: yupResolver(schemaProfileForm),
  });

  const onSubmit = (data) => {
    MainApi.updateUserData(data)
      .then((newUserData) => {
        setFormErrors(null);
        setUserData(newUserData);
        setIsFormDisabled(true);
      }).catch((e) => {
        setIsFormDisabled(false);
        setFormErrors(e);
        // eslint-disable-next-line no-console
        console.log(e);
      });
  };

  const handleLogOut = () => MainApi.postSignOut()
    .then(() => {
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
        disabled={(!isFormDisabled && !isDirty) || !isValid}
        onClick={() => {
          if (isFormDisabled) {
            setIsFormDisabled(false);
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
