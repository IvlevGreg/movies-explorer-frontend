import Joi from 'joi';
import validator from 'validator';

export const REQUIRED_MESSAGE = 'Поле обязательно';
export const REQUIRED_WORD_MESSAGE = 'Нужно ввести ключевое слов';

export const INCORRECT_EMAIL_MESSAGE = 'Нужно ввести корректный email';

export const MAX_LENGTH_PASSWORD_MESSAGE = 'Максимальная длина пароля 30 символов';
export const MAX_LENGTH_PASSWORD = 30;
export const MIN_LENGTH_PASSWORD_MESSAGE = 'Минимальная длина пароля 8 символов';
export const MIN_LENGTH_PASSWORD = 8;

export const MAX_LENGTH_NAME_MESSAGE = 'Максимальная длина имени 30 символов';
export const MAX_LENGTH_NAME = 30;

export const MIN_LENGTH_NAME_MESSAGE = 'Минимальная длина имени 2 символа';
export const MIN_LENGTH_NAME = 2;
export const MAX_LENGTH_SEARCH_MESSAGE = 'Максимальная длина фильма для поиска 40 символов';

const customMethodEmail = (value, helpers) => (!validator.isEmail(value)
  ? helpers.error('any.invalid') : value);

const emailFiled = Joi.string()
  .custom(customMethodEmail)
  .message(INCORRECT_EMAIL_MESSAGE);

const nameFiled = Joi
  .string()
  .required()
  .min(MIN_LENGTH_NAME)
  .max(MAX_LENGTH_NAME)
  .message({
    'string.required': REQUIRED_MESSAGE,
    'string.min': MIN_LENGTH_NAME_MESSAGE,
    'string.max': MAX_LENGTH_NAME_MESSAGE,
  });

const passwordFiled = Joi
  .string()
  .required()
  .min(MIN_LENGTH_PASSWORD)
  .max(MAX_LENGTH_PASSWORD)
  .message({
    'string.required': REQUIRED_MESSAGE,
    'string.min': MIN_LENGTH_PASSWORD_MESSAGE,
    'string.max': MAX_LENGTH_PASSWORD_MESSAGE,
  });
// const searchFiled =
// Joi.string().required(REQUIRED_WORD_MESSAGE).max(40, MAX_LENGTH_SEARCH_MESSAGE);

export const schemaSearchForm = Joi
  .object({
    // search: searchFiled,
  });

export const schemaLoginForm = Joi
  .object({
    email: emailFiled, password: passwordFiled,
  });

export const schemaSignUpForm = Joi
  .object({
    email: emailFiled, password: passwordFiled, name: nameFiled,
  });

export const schemaProfileForm = Joi
  .object({
    email: emailFiled, name: nameFiled,
  });
