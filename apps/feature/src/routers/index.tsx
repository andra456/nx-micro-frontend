import React from 'react';
import IndexingRoutes from '../source';

export function App() {
  return (
    <React.Suspense fallback={null}>
      <IndexingRoutes />
    </React.Suspense>
  );
}
export default App;
