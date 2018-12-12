import React from 'react';
import DefaultLayout from './containers/DefaultLayout';

const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));
const Events = React.lazy(() => import('./views/Events/Events'));
const About = React.lazy(() => import('./views/Pages/About/About'));
const Profile = React.lazy(() => import('./views/Profile/Profile'));

const routes = [
    { path: '/', exact: true, name: 'Home', component: DefaultLayout },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/events', name: 'Events', component: Events },
    { path: '/about', name: 'About', component: About },
    { path: '/profile', name: 'Profile', component: Profile },
];

export default routes;
