import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Profile from './components/features/profile/Profile';
import Navigation from './components/shared/navigation/Navigation';
import { Route } from './constants/Types';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

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
    <Profile />
    <Navigation selected={1} routes={routes} />
  </React.StrictMode>
);

reportWebVitals();
