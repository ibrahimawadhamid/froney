import React from 'react';
import DefaultLayout from './containers/DefaultLayout';

const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));
const About = React.lazy(() => import('./views/Pages/About/About'));

const routes = [
    { path: '/', exact: true, name: 'Home', component: DefaultLayout },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/about', name: 'About', component: About },
];

export default routes;
