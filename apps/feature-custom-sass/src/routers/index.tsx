import styled from '@emotion/styled';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';

const StyledApp = styled.div`
  // Your style here
`;
const Feature1 = loadable(() => import(`../main/customize/featureA`));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <StyledApp>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/standard/welcome">welcome</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/standard/welcome" element={<Feature1 />} />
        </Routes>
      </StyledApp>
    </React.Suspense>
  );
}

export default App;
