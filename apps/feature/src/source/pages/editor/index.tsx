import loadable from '@loadable/component';
import { PATH_ROUTER } from '../../config';

export default {
  path: PATH_ROUTER.EDITOR,
  isSidebar: true,
  keyIndex: 'editor-page',
  component: loadable(() => import(/* webpackChunkName: "view-report" */ './viewsEditor')),
};
