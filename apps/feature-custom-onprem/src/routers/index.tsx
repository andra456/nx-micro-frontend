import styled from '@emotion/styled';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';

const FeatureCustomOnprem = loadable(() => import('../source/customize/featureA'));
const FeatureCustomSass = loadable(() => import('../source/customize/featureB'));
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

export function App() {
  return (
    <React.Suspense fallback={null}>
      <Routes>
        <Route path="/on-premise" element={<NavStandard />} />
        <Route path="/feature-standard-a" element={<FeatureCustomOnprem />} />
        <Route path="/feature-standard-b" element={<FeatureCustomSass />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
