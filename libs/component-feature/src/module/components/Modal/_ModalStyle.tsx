import styled from '@emotion/styled';
import { color } from '../../index';

interface IModalComposition {
  Overlay?: any;
  Content?: any;
  CloseButton?: any;
}

const S: IModalComposition = {};

S.Overlay = styled('div')({
  width: '100vw',
  height: '100vh',
  backgroundColor: '#000',
  opacity: 0.5,
  position: 'fixed',
  inset: 0,
  zIndex: 2,
});

S.Content = styled('div')({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 560,
  height: 'auto',
  maxHeight: '80vh',
  backgroundColor: color['n-0'],
  borderRadius: 8,
  padding: 24,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  zIndex: 2,
});

S.CloseButton = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
});

export default S;
