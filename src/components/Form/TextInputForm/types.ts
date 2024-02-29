import { Control, FieldError } from 'react-hook-form';
import { IFormSimpleInterestValues } from '../../../hooks/useSimpleInterestForm/types';

export interface ITextInputFormProps {
  name: keyof IFormSimpleInterestValues;
  control?: Control<IFormSimpleInterestValues> | undefined;
  error: FieldError | undefined;
}
