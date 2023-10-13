import AirAsia from './airasia';
import Bluebird from './bluebird';
import Samsung from './samsung';
interface IRounteIndexing {
  customName: string;
  routing: React.ReactElement | JSX.Element | any;
}

const ListServices: IRounteIndexing[] = [
  { customName: 'airasia', routing: AirAsia },
  { customName: 'bluebird', routing: Bluebird },
  { customName: 'samsung', routing: Samsung },
];
const IndexingRoutes = ({ clientId }: { clientId: string }): JSX.Element => {
  const SelectModulesRoute = ListServices.findIndex((e: any) => e.customName === clientId);
  console.log(clientId, SelectModulesRoute, ListServices[SelectModulesRoute]);
  if (SelectModulesRoute >= 0) {
    const RoutingPath = ListServices[SelectModulesRoute].routing;
    return <RoutingPath />;
  } else {
    return <div> 404, module not found</div>;
  }
};

export default IndexingRoutes;
