import loadable from '@loadable/component';
import { PATH_ROUTER } from '../../config';

export default {
  path: PATH_ROUTER.PREVIEW,
  isSidebar: true,
  keyIndex: 'preview-page',
  component: loadable(() => import(/* webpackChunkName: "view-report" */ './viewsPreview')),
};
