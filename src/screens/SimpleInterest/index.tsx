import React from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';
import { useSimpleInterest } from '../../hooks/useSimpleInterest';
import { useSimpleInterestForm } from '../../hooks/useSimpleInterestForm';
import { IFormSimpleInterestValues } from '../../hooks/useSimpleInterestForm/types';
import { TextInputForm } from '../../components/Form/TextInputForm';

const SimpleInterestScreen = () => {
  const { control, errors, handleSubmit, isValid, watchedFields } =
    useSimpleInterestForm();

  const { getMonthlySimpleInterestRate } = useSimpleInterest();

  const submitSimpleInsterestForm = (values: IFormSimpleInterestValues) => {
    const result = getMonthlySimpleInterestRate({
      initialValue: Number(values.initialValue),
      interestPeriodValue: Number(values.interestRatePeriodValue),
      timePeriod: watchedFields.timePeriod,
      timePeriodValue: Number(values.timePeriodValue),
      periodInterestRate: watchedFields.periodInterestRate,
    });
  };

  return (
    <SafeAreaView>
      <View
        style={{
          gap: 10,
        }}
      >
        <Text>Valor Inicial</Text>
        <TextInputForm
          name="initialValue"
          control={control}
          error={errors.initialValue}
        />

        <Text>Taxa de Juros</Text>
        <TextInputForm
          name="interestRatePeriodValue"
          control={control}
          error={errors.interestRatePeriodValue}
        />
        <Button title="Mensal/Anual" onPress={() => {}} />
        <Text>{watchedFields.periodInterestRate}</Text>

        <Text>Período</Text>
        <TextInputForm
          name="timePeriodValue"
          control={control}
          error={errors.timePeriodValue}
        />
        <Button title="Mensal/Anual" onPress={() => {}} />
        <Text>{watchedFields.timePeriod}</Text>
        <Button
          title="Calcular"
          onPress={handleSubmit(submitSimpleInsterestForm)}
        />
      </View>
    </SafeAreaView>
  );
};

export default SimpleInterestScreen;
