import { Controller } from 'react-hook-form';
import { REQUIRED_MESSAGE } from '../../../utils/validation';
import { Input } from '../../Input';

export function EmailController({ className, control }) {
  return (
    <Controller
      name="email"
      control={control}
      rules={{ required: { value: true, message: REQUIRED_MESSAGE } }}
      render={({ field }) => <Input {...field} className={className} />}
    />
  );
}