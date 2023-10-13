import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Link, Route, Routes } from 'react-router-dom';

// import page custom
import Auth from './pages/auth';
import Editor from './pages/editor';
import Preview from './pages/preview';

const LayoutWithSidebar = React.lazy(() => import('@sfreport-container/component-feature/module/layout/LayoutSidebar'));
// interface
interface IRouter {
  path: string;
  element: JSX.Element;
}
// create routers
function IndexRouter() {
  const arrRoutes = [{ ...Auth }, { ...Editor }, { ...Preview }];

  const mappingRoutes: IRouter[] = arrRoutes.map((e: any) => {
    const Component = e.component;
    return {
      path: e.path,
      element: e.isSidebar ? (
        <LayoutWithSidebar>
          <Component />
        </LayoutWithSidebar>
      ) : (
        <Component />
      ),
    };
  });
  console.log(mappingRoutes);
  const element = useRoutes(mappingRoutes);
  return element as JSX.Element;
}

export default IndexRouter;
