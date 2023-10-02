import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useAppContext } from '../context/appsContext';
import loadable from '@loadable/component';
import { features, IFeatureList } from '@config';
// wrapper using default
import Wrapper from '../wrappers/default';

function MainRouter() {
  const { globalState } = useAppContext();
  const [isLoad, setIsLoad] = useState<boolean>(true);

  useEffect(() => {
    setIsLoad(false);
  }, []);

  const PrivateRoute = ({ ...rest }: IFeatureList) => {
    // Jika mengaktifkan auth buat kondisi di sini : rest.private dan token
    if (rest.isAuth === true && globalState?.isLogin === false) {
      //history.push('/login');
    }
  };
  const Standard = loadable(() => import(`feature/Module`));
  const OnPrem = loadable(() => import(`feature-custom-onprem/Module`));
  // const OnSass = loadable(() => import(`feature-custom-sass/Module`));

  return (
    <Wrapper>
      <Standard />
      <OnPrem />
    </Wrapper>
  );
}

export default MainRouter;
