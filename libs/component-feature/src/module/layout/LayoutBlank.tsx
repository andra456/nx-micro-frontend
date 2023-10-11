import styled from '@emotion/styled';

export interface UtilsProps {
  children: JSX.Element;
}

const Wrapper = styled.div`
  color: pink;
`;

export function LayoutBlank(props: UtilsProps) {
  return <Wrapper>{props.children}</Wrapper>;
}

export default LayoutBlank;
