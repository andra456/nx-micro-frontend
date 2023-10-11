import React, { useEffect, useRef } from 'react';

import { QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

import { queryClient } from '../../query';

interface IWrapper {
  children: JSX.Element | JSX.Element[];
}

function Wrapper({ children }: IWrapper) {
  // sidebar
  const isMount = useRef(false);

  useEffect(() => {
    isMount.current = true;
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>{children}</RecoilRoot>
    </QueryClientProvider>
  );
}

export default Wrapper;
