import React from 'react';
import MainRouter from './routers/main';

export function App() {
  return (
    <React.Suspense fallback={null}>
      <MainRouter />
    </React.Suspense>
  );
}

export default App;
