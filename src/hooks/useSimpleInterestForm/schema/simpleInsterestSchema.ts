import * as z from 'zod';
import { Period } from '../../useSimpleInterest/types';

export const simpleInterestSchema = z.object({
  initialValue: z.string().min(1, 'Campo obrigatório'),
  interestRatePeriodValue: z.string().min(1, 'Campo obrigatório'),
  periodInterestRate: z.nativeEnum(Period),
  timePeriodValue: z.string().min(1, 'Campo obrigatório'),
  timePeriod: z.nativeEnum(Period),
});
