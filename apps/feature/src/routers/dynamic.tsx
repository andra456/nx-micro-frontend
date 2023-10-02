import React from 'react';
import { useRoutes } from 'react-router-dom';
import loadable from '@loadable/component';

interface IPropsMapRoute {
  path: string;
  componentName: string;
  children?: IPropsMapRoute[];
}
export const routes = [
  {
    path: '/standard/feature-standard-a',
    componentName: '../source/standard/featureA',
  },
];
const mapRoutesForUse = (routes: any) => {
  return routes.map(({ path, componentName, children }: IPropsMapRoute) => {
    const Component = loadable(() => import(`${componentName}`));
    console.log(Component);
    return {
      path,
      element: <Component />,
      children: children && mapRoutesForUse(children),
    };
  });
};
const ProjectRoutes = ({ routes }: { routes: IPropsMapRoute[] }) => useRoutes(mapRoutesForUse(routes));

export default ProjectRoutes;
