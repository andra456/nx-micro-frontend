import styled from '@emotion/styled';
import { color } from '../../index';

interface IInputComposition {
  Input?: any;
}

const S: IInputComposition = {};

S.Input = styled('div')({
  input: {
    width: '100%',
    border: '1px solid' + color['n-40'],
    borderRadius: 12,
    padding: 10,
    '::placeholder': {
      color: color['n-100'],
    },
  },
});

export default S;
