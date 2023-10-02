import React, { Fragment, useState, useEffect, useRef } from 'react';
// import { ThemeUI } from 'component-design-ui/src';
import { QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { AppProvider } from '../../context/appsContext';
import { TypeLayout } from '@config';
import { queryClient } from '../../query';
import { Link } from 'react-router-dom';

// nav
// const Layout = React.lazy(() => import('@sfreport-design-module/layout/LayoutSidebar'));
// const BlankLayout = React.lazy(() => import('@sfreport-design-module/layout/LayoutBlank'));

interface IWrapper {
  children: JSX.Element | JSX.Element[];
}

function Wrapper({ children }: IWrapper) {
  // sidebar
  const isMount = useRef(false);
  const [active, setActive] = useState<boolean>(false);
  const [preload, setpreload] = useState<boolean>(true);

  useEffect(() => {
    isMount.current = true;
  }, []);

  useEffect(() => {
    if (isMount.current) {
      setTimeout(() => {
        setpreload(false);
      }, 800);
    }
  }, [children]);

  return (
    <QueryClientProvider client={queryClient}>
      <ul>
        <li>
          <Link to="/">Home container</Link>
        </li>
        <li>
          <Link to="/standard/">Home container Standard</Link>
        </li>
        <li>
          <Link to="/on-premise">Home container Onprem</Link>
        </li>
        <li>
          <Link to="/sass">home container Sass</Link>
        </li>
      </ul>
      <AppProvider>
        <RecoilRoot>{children}</RecoilRoot>
      </AppProvider>
    </QueryClientProvider>
  );
}

export default Wrapper;
