import styled from '@emotion/styled';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';

const LayoutWithSidebar = React.lazy(() => import('@sfreport-container/component-feature/module/layout/LayoutSidebar'));
const FeatureA = loadable(() => import('../source/customize/featureA'));
const FeatureB = loadable(() => import('../source/customize/featureB'));

const arrFeature = ['feature-a'];

const NavStandard = () => (
  <div>
    <h1>Home On Premise Components</h1>
    <ul>
      <li>
        <Link to="/on-premise">Home On Premise Components</Link>
      </li>
      <li>
        <Link to="/feature-standard-a">Feature Standard A</Link>
      </li>
      <li>
        <Link to="/feature-standard-b">Feature Standard B</Link>
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
  console.log(isCustom, 'on-promise');
  let Component = <Route path={path} element={<div>{element}</div>} />;
  if (isSidebar) {
    Component = <Route path={path} element={<LayoutWithSidebar>{element}</LayoutWithSidebar>} />;
  }
  return isCustom ? Component : null;
};

export function App() {
  return (
    <React.Suspense fallback={null}>
      <Routes>
        <Route path="/on-premise" element={<NavStandard />} />
        <DynamicRoutes path="/feature-standard-a" keyIndex="feature-a" isSidebar element={<FeatureA />} />
        <DynamicRoutes path="/feature-standard-b" keyIndex="feature-b" isSidebar element={<FeatureB />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
