import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { ColorName } from '../../index';
import S, { ButtonSize, ButtonVariant } from './_ButtonStyle';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconVariant?: 'filled' | 'outlined';
  block?: boolean;
  bg?: ColorName;
  children?: ReactNode;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  iconVariant = 'filled',
  block = false,
  type = 'button',
  bg,
  children,
  ...props
}: IButtonProps) => {
  const getIconSize = (buttonSize: ButtonSize) => {
    const iconSize: { [s in ButtonSize]: number } = {
      lg: 24,
      md: 20,
      sm: 16,
    };
    return iconSize[buttonSize];
  };

  return (
    <S.Button variant={variant} size={size} iconOnly={children ? false : true} block={block} type={type} bg={bg} {...props}>
      {children && <span>{children}</span>}
    </S.Button>
  );
};

export default Button;
