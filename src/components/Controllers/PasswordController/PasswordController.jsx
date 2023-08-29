import { Controller } from 'react-hook-form';
import { MAX_LENGTH_PASSWORD_MESSAGE, MIN_LENGTH_PASSWORD_MESSAGE, REQUIRED_MESSAGE } from '../../../utils/validation';
import { Input } from '../../Input';

export function PasswordController({ className, control, ...rest }) {
  return (
    <Controller
      name="password"
      control={control}
      rules={{
        required: { value: true, message: REQUIRED_MESSAGE },
        minLength: { value: 8, message: MIN_LENGTH_PASSWORD_MESSAGE },
        maxLength: { value: 30, message: MAX_LENGTH_PASSWORD_MESSAGE },
      }}
      render={({ field }) => <Input {...field} {...rest} type="password" className={className} />}
    />
  );
}
