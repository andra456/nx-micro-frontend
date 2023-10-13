import React from 'react';
import { useRoutes } from 'react-router-dom';

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
function CustomRouter() {
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
  const element = useRoutes(mappingRoutes);
  return element as JSX.Element;
}

export default CustomRouter;
