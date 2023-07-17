import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Profile from './components/features/profile/Profile';
import Navigation from './components/shared/navigation/Navigation';
import { Route } from './constants/Types';
import { Provider } from 'react-redux';
import Store from './reducer/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


// TODO USE_REACT_ROUTER
const routes: Array<Route> = [
  {
    id: 1,
    title: 'Mon profil',
    route: '/profil',
  },
  {
    id: 2,
    title: 'Historique',
    route: '/history',
  },
  {
    id: 3,
    title: 'Season pass',
    route: '/season_pass',
  },
  {
    id: 4,
    title: 'Mon compte',
    route: '/account',
  },
]

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Profile />
      <Navigation selected={1} routes={routes} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
