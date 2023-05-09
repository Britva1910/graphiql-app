import ReactDOM from 'react-dom/client';
import App from './App';

import store from './app/store';
import { Provider } from 'react-redux';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
