import React from 'react';
import * as S from './styles';

import { Controller } from 'react-hook-form';
import { ITextInputFormProps } from './types';
import { Typograph } from '../../Typograph';

export const TextInputForm: React.FC<ITextInputFormProps> = ({
  name,
  control,
  error,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <S.Container>
          <S.Input onChangeText={onChange} value={value} />
          <Typograph color="cardPrimaryBackground">{error?.message}</Typograph>
        </S.Container>
      )}
    />
  );
};
