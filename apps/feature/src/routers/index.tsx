import React, { lazy } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { global } from '@sfreport-container/component-feature/module/styles/_global';

const arrFeature = localStorage.getItem('customize')?.split(',') ?? [];

const FeatureA = loadable(() => import('../source/featureA'));
const FeatureB = loadable(() => import('../source/featureB'));
const Auth = loadable(() => import('../source/auth'));

const LayoutWithSidebar = React.lazy(() => import('@sfreport-container/component-feature/module/layout/LayoutSidebar'));

const NavStandard = () => (
  <div>
    <h1>Home Standard Components</h1>
    <ul>
      <li>
        <Link to="feature-standard-a">Feature Standard A</Link>
      </li>
      <li>
        <Link to="feature-standard-b">Feature Standard B</Link>
      </li>
    </ul>
  </div>
);

const DynamicRoutes = ({
  isSidebar = false,
  path,
  element,
  keyIndex,
}: {
  isSidebar?: boolean;
  keyIndex: string;
  element: any;
  path: string;
}) => {
  const isCustom = arrFeature.includes(keyIndex);
  console.log(isCustom, 'standard');
  let Component = <Route path={path} element={<div>{element}</div>} />;
  if (isSidebar) {
    Component = <Route path={path} element={<LayoutWithSidebar>{element}</LayoutWithSidebar>} />;
  }
  return !isCustom ? Component : null;
};

export function FeatureStandard() {
  return (
    <React.Suspense fallback={null}>
      <div className={global}>
        <Routes>
          <Route path="/" element={<Auth />} />
          <DynamicRoutes path="/feature-standard-a" keyIndex="feature-a" isSidebar element={<FeatureA />} />
          <DynamicRoutes path="/feature-standard-b" keyIndex="feature-b" isSidebar element={<FeatureB />} />
        </Routes>
      </div>
    </React.Suspense>
  );
}

export default FeatureStandard;
