import styled from '@emotion/styled';
import { css } from 'emotion';
import { color, ColorName } from '../../index';
interface IProgressComposition {
  Container?: any;
  ProgresOuter?: any;
  ProgressInner?: any;
  ProgresBar?: any;
}
interface IProgressInner {
  bg: ColorName;
}
interface ProgresBar {
  percent: number;
  size: number;
  bgColor: ColorName;
}
const S: IProgressComposition = {};

export const Animated = css`
  position: relative;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: #fff;
    animation: gradient 2.4s cubic-bezier(0.23, 1, 0.32, 1) infinite;
    content: '';
  }

  @keyframes gradient {
    0% {
      width: 0;
      opacity: 0.1;
    }
    20% {
      width: 0;
      opacity: 0.5;
    }
    100% {
      width: 100%;
      opacity: 0;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
S.Container = styled('div')({
  margin: '5px 0',
  width: '100%',
  div: {
    transition: 'all 0.4s cubic-bezier(0.08, 0.82, 0.17, 1) 0s',
  },
});

S.ProgresOuter = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
});
S.ProgressInner = styled('div')<IProgressInner>(({ bg }) => ({
  position: 'relative',
  display: 'inline-block',
  width: '100%',
  overflow: 'hidden',
  verticalAlign: 'middle',
  backgroundColor: color[bg],
  borderRadius: '100px',
}));

S.ProgresBar = styled('div')<ProgresBar>(({ size, bgColor, percent }) => ({
  width: `${percent}%`,
  height: `${size}px`,
  background: color[bgColor],
}));
export default S;
