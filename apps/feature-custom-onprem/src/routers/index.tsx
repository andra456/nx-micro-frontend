import React from 'react';
import IndexingRoutes from '../source/customize';

const clientId = localStorage.getItem('clientId') ?? '';

export function App() {
  return (
    <React.Suspense fallback={null}>
      <IndexingRoutes clientId={clientId} />
    </React.Suspense>
  );
}
export default App;
