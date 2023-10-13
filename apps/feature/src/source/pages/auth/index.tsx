import loadable from '@loadable/component';
import { PATH_ROUTER } from '../../config';

export default {
  path: PATH_ROUTER.AUTH_PAGE,
  isSidebar: false,
  keyIndex: 'auth-page',
  component: loadable(() => import(/* webpackChunkName: "view-auth" */ './viewsAuth')),
};
