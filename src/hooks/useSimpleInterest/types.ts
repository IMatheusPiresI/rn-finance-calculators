export enum Period {
  MONTHLY = 'Monthly',
  YEARLY = 'Yearly',
}

export interface IResponseSimpleInterest {
  total: number;
  justInterest: number;
  monthlyInterest: number[];
}

export interface IGetMonthlySimpleInterestRateParams {
  initialValue: number;
  timePeriodValue: number;
  interestPeriodValue: number;
  periodInterestRate: Period;
  timePeriod: Period;
}
