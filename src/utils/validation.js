import * as yup from 'yup';

export const REQUIRED_MESSAGE = 'Поле обязательно';
export const REQUIRED_WORD_MESSAGE = 'Нужно ввести ключевое слов';

export const INCORRECT_EMAIL_MESSAGE = 'Нужно ввести корректный email';

export const MAX_LENGTH_PASSWORD_MESSAGE = 'Максимальная длина пароля 30 символов';
export const MIN_LENGTH_PASSWORD_MESSAGE = 'Минимальная длина пароля 8 символов';

export const MAX_LENGTH_NAME_MESSAGE = 'Максимальная длина имени 30 символов';

export const MIN_LENGTH_NAME_MESSAGE = 'Минимальная длина имени 2 символа';
export const MAX_LENGTH_SEARCH_MESSAGE = 'Максимальная длина фильма для поиска 40 символов';

const emailFiled = yup.string().required(REQUIRED_MESSAGE).email(INCORRECT_EMAIL_MESSAGE);
const nameFiled = yup
  .string()
  .required(REQUIRED_MESSAGE)
  .min(2, MAX_LENGTH_NAME_MESSAGE).max(30, MIN_LENGTH_NAME_MESSAGE);
const passwordFiled = yup
  .string()
  .required(REQUIRED_MESSAGE)
  .min(8, MIN_LENGTH_PASSWORD_MESSAGE)
  .max(30, MAX_LENGTH_PASSWORD_MESSAGE);
// const searchFiled = yup.string().required(REQUIRED_WORD_MESSAGE).max(40, MAX_LENGTH_SEARCH_MESSAGE);

export const schemaSearchForm = yup
  .object({
    // search: searchFiled,
  });

export const schemaLoginForm = yup
  .object({
    email: emailFiled, password: passwordFiled,
  });

export const schemaSignUpForm = yup
  .object({
    email: emailFiled, password: passwordFiled, name: nameFiled,
  });

export const schemaProfileForm = yup
  .object({
    email: emailFiled, name: nameFiled,
  });
