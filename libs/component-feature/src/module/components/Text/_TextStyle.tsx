import styled from '@emotion/styled';
import { typography, TextVariant, color, ColorName } from '../../index';
import { Alignment } from './Text';

interface ITextComposition {
  Text?: any;
  Span?: any;
}

interface IStyledTextProps {
  variant: TextVariant;
  color: ColorName;
  align: Alignment;
}

const S: ITextComposition = {};

const getTextProps = ({ variant, color: colorName, align }: IStyledTextProps) => ({
  fontSize: typography[variant].size,
  fontWeight: typography[variant].weight,
  marginBottom: 0,
  textAlign: align,
  color: color[colorName],
  '> *': {
    display: 'inline-block',
  },
});

S.Text = styled('p')<IStyledTextProps>((props) => getTextProps(props));
S.Span = styled('span')<IStyledTextProps>((props) => getTextProps(props));

export default S;
