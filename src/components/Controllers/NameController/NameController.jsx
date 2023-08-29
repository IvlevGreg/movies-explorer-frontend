import { Controller } from 'react-hook-form';
import { MAX_LENGTH_NAME_MESSAGE, MIN_LENGTH_NAME_MESSAGE, REQUIRED_MESSAGE } from '../../../utils/validation';
import { Input } from '../../Input';

export function NameController({ className, control, ...rest }) {
  return (
    <Controller
      name="name"
      control={control}
      rules={{
        required: { value: true, message: REQUIRED_MESSAGE },
        minLength: { value: 2, message: MIN_LENGTH_NAME_MESSAGE },
        maxLength: { value: 30, message: MAX_LENGTH_NAME_MESSAGE },
      }}
      render={({ field }) => <Input {...field} {...rest} className={className} />}
    />
  );
}
