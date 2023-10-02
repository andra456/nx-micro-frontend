const weight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

const size = {
  "4xl": "3.75rem", // 60px
  "3xl": "3rem", // 48px
  "2xl": "2.125rem", // 34px
  xl: "1.5rem", // 24px
  lg: "1.25rem", // 20px
  base: "1rem", // if root is 16px
  sm: "0.875rem", // 14px
  xs: "0.75rem", // 12px
  "2xs": "0.625rem", // 10px
};

export const heading = {
  "h1-semibold": { size: size["4xl"], weight: weight.semibold },
  "h1-bold": { size: size["4xl"], weight: weight.bold },
  "h1-medium": { size: size["4xl"], weight: weight.medium },
  "h1-regular": { size: size["4xl"], weight: weight.regular },

  "h2-semibold": { size: size["3xl"], weight: weight.semibold },
  "h2-bold": { size: size["3xl"], weight: weight.bold },
  "h2-medium": { size: size["3xl"], weight: weight.medium },
  "h2-regular": { size: size["3xl"], weight: weight.regular },

  "h3-semibold": { size: size["2xl"], weight: weight.semibold },
  "h3-bold": { size: size["2xl"], weight: weight.bold },
  "h3-medium": { size: size["2xl"], weight: weight.medium },
  "h3-regular": { size: size["2xl"], weight: weight.regular },

  "h4-semibold": { size: size.xl, weight: weight.semibold },
  "h4-bold": { size: size.xl, weight: weight.bold },
  "h4-medium": { size: size.xl, weight: weight.medium },
  "h4-regular": { size: size.xl, weight: weight.regular },
};

export const typography = {
  "h5-semibold": { size: size.lg, weight: weight.semibold },
  "h5-bold": { size: size.lg, weight: weight.bold },
  "h5-medium": { size: size.lg, weight: weight.medium },
  "h5-regular": { size: size.lg, weight: weight.regular },

  "subtitle1-semibold": { size: size.base, weight: weight.semibold },
  "subtitle1-bold": { size: size.base, weight: weight.bold },
  "subtitle1-medium": { size: size.base, weight: weight.medium },
  "subtitle1-regular": { size: size.base, weight: weight.regular },

  "subtitle2-semibold": { size: size.sm, weight: weight.semibold },
  "subtitle2-bold": { size: size.sm, weight: weight.bold },
  "subtitle2-medium": { size: size.sm, weight: weight.medium },
  "subtitle2-regular": { size: size.sm, weight: weight.regular },

  "subtitle3-semibold": { size: size.xs, weight: weight.semibold },
  "subtitle3-bold": { size: size.xs, weight: weight.bold },
  "subtitle3-medium": { size: size.xs, weight: weight.medium },
  "subtitle3-regular": { size: size.xs, weight: weight.regular },

  "subtitle4-semibold": { size: size["2xs"], weight: weight.semibold },
  "subtitle4-bold": { size: size["2xs"], weight: weight.bold },
  "subtitle4-medium": { size: size["2xs"], weight: weight.medium },
  "subtitle4-regular": { size: size["2xs"], weight: weight.regular },

  "body1-semibold": { size: size.base, weight: weight.semibold },
  "body1-bold": { size: size.base, weight: weight.bold },
  "body1-medium": { size: size.base, weight: weight.medium },
  "body1-regular": { size: size.base, weight: weight.regular },

  "body2-semibold": { size: size.sm, weight: weight.semibold },
  "body2-bold": { size: size.sm, weight: weight.bold },
  "body2-medium": { size: size.sm, weight: weight.medium },
  "body2-regular": { size: size.sm, weight: weight.regular },

  "body3-semibold": { size: size.xs, weight: weight.semibold },
  "body3-bold": { size: size.xs, weight: weight.bold },
  "body3-medium": { size: size.xs, weight: weight.medium },
  "body3-regular": { size: size.xs, weight: weight.regular },

  "body4-semibold": { size: size["2xs"], weight: weight.semibold },
  "body4-bold": { size: size["2xs"], weight: weight.bold },
  "body4-medium": { size: size["2xs"], weight: weight.medium },
  "body4-regular": { size: size["2xs"], weight: weight.regular },

  button: { size: size.sm, weight: weight.semibold },
  cta1: { size: size.sm, weight: weight.semibold },
  cta2: { size: size.xs, weight: weight.semibold },
  link1: { size: size.sm, weight: weight.regular },
  link2: { size: size.xs, weight: weight.regular },
};

export type TextVariant = keyof typeof typography;
export type HeadingVariant = keyof typeof heading;
