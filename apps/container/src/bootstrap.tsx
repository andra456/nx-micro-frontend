import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './app/routers/main';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <MainRouter />
  </BrowserRouter>,
);
