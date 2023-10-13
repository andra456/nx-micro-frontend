import React, { useState, useEffect } from 'react';

import loadable from '@loadable/component';
// import { features, IFeatureList } from '@config';
// wrapper using default
import Wrapper from '../wrappers/default';

const typeService = localStorage.getItem('type-services') ?? '';

function MainRouter() {
  const [isLoad, setIsLoad] = useState<boolean>(true);

  useEffect(() => {
    setIsLoad(false);
  }, []);

  const Standard = loadable(() => import(`feature/Module`));
  const Customize =
    typeService === 'custom' ? loadable(() => import(`feature-custom-onprem/Module`)) : loadable(() => import(`./defaultNull`));
  // const OnSass = loadable(() => import(`feature-custom-sass/Module`));

  return (
    <Wrapper>
      <Standard />
      <Customize />
    </Wrapper>
  );
}

export default MainRouter;
