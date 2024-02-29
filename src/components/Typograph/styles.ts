import styled, { css } from 'styled-components/native';

type ITypographTextProps = {
  font?: string;
  fontSize: number;
  color: string;
  flex?: boolean;
  alignment?: string;
  lineHeight?: number;
};

export const TypographText = styled.Text<ITypographTextProps>`
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ color }) => color};
  font-family: ${({ font }) => font};

  ${({ flex }) =>
    flex &&
    css`
      flex: 1;
    `}

  ${({ alignment }) =>
    alignment &&
    css`
      text-align: ${alignment};
    `}

  ${({ lineHeight }) =>
    lineHeight &&
    css`
      line-height: ${lineHeight}px;
    `}
`;
