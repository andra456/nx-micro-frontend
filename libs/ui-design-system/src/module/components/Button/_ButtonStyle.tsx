import styled from '@emotion/styled';
import { color, ColorName, lg } from '../../index';

export type ButtonVariant = 'primary' | 'secondary' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface IButtonStyleProps {
  variant: ButtonVariant;
  size: ButtonSize;
  iconOnly: boolean;
  block: boolean;
  bg: ColorName;
}

interface IButtonComposition {
  Button?: any;
}

const S: IButtonComposition = {};

const getBackgroundColor = (variant: ButtonVariant, bg: ColorName) => {
  switch (variant) {
    case 'primary':
      if (bg) {
        return color[bg];
      }
      return color['r-100'];
    case 'secondary':
      return color['n-0'];
    case 'text':
      return 'transparent';
    default:
      return color['r-100'];
  }
};

const getColor = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return color['n-0'];
    case 'secondary':
      return color['n-900'];
    case 'text':
      return color['r-100'];
    default:
      return color['n-0'];
  }
};

const getHoverColor = (variant: ButtonVariant, bg: ColorName) => {
  switch (variant) {
    case 'primary':
      if (bg) {
        return color['r-300'];
      }
      return color['r-200'];
    case 'secondary':
      return color['n-20'];
    default:
      return 'transparent';
  }
};

const getBorderWidth = (variant: ButtonVariant) => (variant === 'secondary' ? 1 : 0);

const getBorderColor = (variant: ButtonVariant) => {
  if (variant === 'secondary') {
    return color['n-90'];
  }
  return 'transparent';
};

const getPaddingBlock = (size: ButtonSize, variant: ButtonVariant, iconOnly: boolean) => {
  const paddingBlock: { [s in ButtonSize]: { [v in ButtonVariant]: any } } = {
    lg: {
      primary: {
        noIcon: 8,
        iconOnly: 12,
      },
      secondary: {
        noIcon: 8,
        iconOnly: 12,
      },
      text: {
        noIcon: 8,
        iconOnly: 12,
      },
    },
    md: {
      primary: {
        noIcon: 8,
        iconOnly: 8,
      },
      secondary: {
        noIcon: 8,
        iconOnly: 8,
      },
      text: {
        noIcon: 8,
        iconOnly: 8,
      },
    },
    sm: {
      primary: {
        noIcon: 4,
        iconOnly: 4,
      },
      secondary: {
        noIcon: 4,
        iconOnly: 4,
      },
      text: {
        noIcon: 4,
        iconOnly: 4,
      },
    },
  };
  const icon = iconOnly ? 'iconOnly' : 'noIcon';
  return paddingBlock[size][variant][icon];
};

const getPaddingInline = (size: ButtonSize, variant: ButtonVariant, iconOnly: boolean) => {
  const paddingInline: { [s in ButtonSize]: { [v in ButtonVariant]: any } } = {
    lg: {
      primary: {
        noIcon: 16,
        iconOnly: 12,
      },
      secondary: {
        noIcon: 16,
        iconOnly: 12,
      },
      text: {
        noIcon: 0,
        iconOnly: 12,
      },
    },
    md: {
      primary: {
        noIcon: 12,
        iconOnly: 8,
      },
      secondary: {
        noIcon: 12,
        iconOnly: 8,
      },
      text: {
        noIcon: 0,
        iconOnly: 8,
      },
    },
    sm: {
      primary: {
        noIcon: 8,
        iconOnly: 4,
      },
      secondary: {
        noIcon: 8,
        iconOnly: 4,
      },
      text: {
        noIcon: 0,
        iconOnly: 4,
      },
    },
  };
  const icon = iconOnly ? 'iconOnly' : 'noIcon';
  return paddingInline[size][variant][icon];
};

const getMinWidth = (size: ButtonSize, iconOnly: boolean) => {
  const minWidth: { [s in ButtonSize]: number } = {
    lg: 120,
    md: 120,
    sm: 88,
  };
  return !iconOnly ? minWidth[size] : 0;
};

const getFontSize = (size: ButtonSize) => {
  const fontSize: { [s in ButtonSize]: number } = {
    lg: 16,
    md: 14,
    sm: 12,
  };
  return fontSize[size];
};

S.Button = styled('button')<IButtonStyleProps>(({ variant, iconOnly, size, block, bg }) => ({
  borderWidth: getBorderWidth(variant),
  borderColor: getBorderColor(variant),
  borderStyle: 'solid',
  borderRadius: 10,
  paddingBlock: getPaddingBlock(size, variant, iconOnly),
  paddingInline: getPaddingInline(size, variant, iconOnly),
  display: 'inline-flex',
  gap: '0.6em',
  backgroundColor: getBackgroundColor(variant, bg),
  color: getColor(variant),
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 600,
  fontSize: getFontSize(size),
  minWidth: getMinWidth(size, iconOnly),
  cursor: 'pointer',
  flexShrink: 0,
  flexGrow: block ? 1 : 0,
  height: 'max-content',
  svg: {
    path: {
      fill: getColor(variant),
    },
  },
  ':disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  [lg]: {
    ':hover:not(:disabled)': {
      backgroundColor: getHoverColor(variant, bg),
    },
  },
}));

export default S;
