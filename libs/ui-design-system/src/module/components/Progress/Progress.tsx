import React from 'react';
import { color, ColorName } from '../../index';
import S, { Animated } from './_ProgressStyle';
interface IPropsProgress {
  variantColor?: ColorName;
  percent: number;
  size?: number;
  bg?: ColorName;
  gradient?: boolean;
  className?: string;
}
export const Progress = ({
  variantColor = 'n-30',
  percent = 0,
  size = 8,
  bg = 'n-50',
  gradient = false,
  className = 'wrapper-progress',
}: IPropsProgress): JSX.Element => (
  <S.Container className={className}>
    <S.ProgresOuter>
      <S.ProgressInner bg={bg}>
        <S.ProgresBar
          className={Animated}
          bgColor={variantColor}
          percent={percent}
          size={size}
          gradient={gradient}
        ></S.ProgresBar>
      </S.ProgressInner>
    </S.ProgresOuter>
  </S.Container>
);
