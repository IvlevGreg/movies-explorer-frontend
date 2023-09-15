export const mapServerErrors = (error) => {
  const validationError = error?.validation?.body?.message;
  if (validationError) return validationError;

  return error.message || error.text || 'неизвестная ошибка';
};
