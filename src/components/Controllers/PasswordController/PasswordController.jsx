import { Controller } from 'react-hook-form';
import { REQUIRED_MESSAGE } from '../../../utils/validation';
import { Input } from '../../Input';

export function PasswordController({ className, control, ...rest }) {
  return (
    <Controller
      name="password"
      control={control}
      rules={{ required: { value: true, message: REQUIRED_MESSAGE } }}
      render={({ field }) => <Input {...field} {...rest} type="password" className={className} />}
    />
  );
}
