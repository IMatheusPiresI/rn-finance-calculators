import {
  IGetMonthlySimpleInterestRateParams,
  IResponseSimpleInterest,
  Period,
} from './types';

export const useSimpleInterest = () => {
  const getValueSimpleInterest = (
    initialValue: number,
    timePeriodValue: number,
    interestPeriodValue: number,
  ): number => {
    const decimalInterestRate = timePeriodValue / 100;
    const justInterest =
      initialValue * decimalInterestRate * interestPeriodValue;

    return justInterest;
  };

  const getPeriodMonthly = (timePeriod: Period, period: number) => {
    if (timePeriod === Period.YEARLY) {
      return period * 12;
    }
    return period;
  };

  const getInterestRateMonthly = (
    periodInterestRate: Period,
    interestRate: number,
  ) => {
    if (periodInterestRate === Period.YEARLY) {
      return interestRate / 12;
    }
    return interestRate;
  };

  const getMonthlySimpleInterestRate = ({
    initialValue,
    interestPeriodValue,
    timePeriod,
    timePeriodValue,
    periodInterestRate,
  }: IGetMonthlySimpleInterestRateParams): IResponseSimpleInterest => {
    const monthlyInterest: number[] = [];
    const userInitialValue = Number(initialValue);
    const timePeriodMonthly = getPeriodMonthly(timePeriod, timePeriodValue);
    const interestRateMonthly = getInterestRateMonthly(
      periodInterestRate,
      interestPeriodValue,
    );

    for (let month = 1; month <= timePeriodMonthly; month++) {
      const interest = userInitialValue * (interestRateMonthly / 100) * month;
      monthlyInterest.push(Number(interest.toFixed(0)));
    }

    const justInterest = getValueSimpleInterest(
      initialValue,
      timePeriodValue,
      interestPeriodValue,
    );

    return {
      total: justInterest + Number(userInitialValue),
      justInterest,
      monthlyInterest,
    };
  };

  return {
    getMonthlySimpleInterestRate,
  };
};
