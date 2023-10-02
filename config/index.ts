import * as mainList from './main.json';
import * as onpromise from './features/onpremise.json';
import * as standard from './features/standard.json';
import * as sass from './features/sass.json';
enum TypeLayout {
  sidebar = 'sidebar',
  blank = 'blank',
}
interface IFeatureList {
  chunkName: string;
  path: string;
  layout: TypeLayout | string;
  component: string;
  isExact: boolean;
  isAuth: boolean;
}

const cleanFeature = (json: { pages: IFeatureList[] }) =>
  json.pages.filter((e: IFeatureList) => e.path !== '' && e.component !== '');

const features = cleanFeature(mainList);
const featuresOnpromise = cleanFeature(onpromise);
const featuresStandard = cleanFeature(standard);
const featuresSass = cleanFeature(sass);

export { features, featuresOnpromise, featuresSass, featuresStandard, IFeatureList, TypeLayout };
