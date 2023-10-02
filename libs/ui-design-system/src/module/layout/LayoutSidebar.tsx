import styled from '@emotion/styled';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export interface UtilsProps {
  children: JSX.Element;
  sider: JSX.Element;
  header: JSX.Element;
  footer: JSX.Element;
}

const Wrapper = styled.div`
  color: pink;
`;

export function LayoutWithSidebar({ children, sider, header, footer }: UtilsProps) {
  return (
    <Layout>
      <Header>{header}</Header>
      <Layout hasSider>
        <Sider>{sider}</Sider>
        <Content>{children}</Content>
      </Layout>
      <Footer>{footer}</Footer>
    </Layout>
  );
}

export default LayoutWithSidebar;

/*
  <Layout>
      <Header style={headerStyle}>Header</Header>
      <Layout hasSider>
        <Sider style={siderStyle}>Sider</Sider>
        <Content style={contentStyle}>Content</Content>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
    */
