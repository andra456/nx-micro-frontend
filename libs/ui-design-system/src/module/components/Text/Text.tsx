import React, { HTMLAttributes } from 'react';
import { TextVariant, ColorName } from '../../index';
import S from './_TextStyle';

export type Alignment = 'left' | 'center' | 'right';

interface ITextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: TextVariant;
  color?: ColorName;
  align?: Alignment;
  as?: 'span' | 'p';
}

const Text = ({ variant = 'body1-regular', color, children, align = 'left', as = 'p', ...props }: ITextProps) => {
  if (as === 'span') {
    return (
      <S.Span variant={variant} color={color} align={align} {...props}>
        {children}
      </S.Span>
    );
  }
  return (
    <S.Text variant={variant} color={color} align={align} {...props}>
      {children}
    </S.Text>
  );
};

export default Text;
