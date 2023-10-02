import styled from '@emotion/styled';
import { color } from '../../index';

interface IToggleComposition {
  Wrapper?: any;
  Button?: any;
}

const S: IToggleComposition = {};

S.Wrapper = styled('div')<{ checked: boolean }>((props) => ({
  display: 'inline-flex',
  outline: 0,
  minWidth: 38,
  height: 22,
  position: 'relative',
  cursor: 'pointer',
  userSelect: 'none',
  background: props.checked ? color['g-200'] : color['n-30'],
  borderRadius: 99,
  padding: 4,
  transition: 'all 0.4s ease',
}));

S.Button = styled('span')<{ checked: boolean }>((props) => ({
  boxSizing: 'initial',
  left: props.checked ? 4 : 'calc(100% - 14px - 4px)',
  position: 'absolute',
  display: 'block',
  width: 14,
  height: 14,
  borderRadius: '50%',
  background: props.checked ? color['n-0'] : color['n-60'],
  transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), padding 0.3s ease, margin 0.3s ease',

  ':active': {
    boxSizing: 'initial',
    background: color['n-30'],
  },
}));

export default S;
