import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';

const FeatureCustomOnprem = loadable(() => import('../source/featureA'));
const FeatureCustomSass = loadable(() => import('../source/featureB'));

const NavStandard = () => (
  <div>
    <h1>Home Standard Components</h1>
    <ul>
      <li>
        <Link to="/standard">Home Standard Components</Link>
      </li>
      <li>
        <Link to="/standrd/feature-standard-a">Feature Standard A</Link>
      </li>
      <li>
        <Link to="/standard/feature-standard-b">Feature Standard B</Link>
      </li>
    </ul>
  </div>
);

export function FeatureStandard() {
  return (
    <React.Suspense fallback={null}>
      <Routes>
        <Route path="/standard" element={<NavStandard />} />
        <Route path="/feature-standard-a" element={<FeatureCustomOnprem />} />
        <Route path="/feature-standard-b" element={<FeatureCustomSass />} />
      </Routes>
    </React.Suspense>
  );
}

export default FeatureStandard;
