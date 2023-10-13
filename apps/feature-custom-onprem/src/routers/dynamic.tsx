import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
const LayoutWithSidebar = React.lazy(() => import('@sfreport-container/component-feature/module/layout/LayoutSidebar'));

const DynamicRoutes = ({ isSidebar = false, path, element }: { isSidebar?: boolean; element: any; path: string }) => {
  let Component = <Route path={path} element={<div>{element}</div>} />;
  if (isSidebar) {
    Component = <Route path={path} element={<LayoutWithSidebar>{element}</LayoutWithSidebar>} />;
  }
  return Component;
};

export default DynamicRoutes;
