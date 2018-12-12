import React, {Component, Suspense} from 'react';

import {AppHeader, AppSidebar, AppSidebarHeader, AppSidebarForm, AppSidebarNav, AppSidebarFooter,
    AppSidebarMinimizer, AppFooter, AppBreadcrumb} from '@coreui/react';
import { Container } from 'reactstrap';

import navigationItems from '../../navigationItems';
import routes from '../../routes';
import {Redirect, Route, Switch} from "react-router-dom";
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner';

const DefaultHeader = React.lazy(() => import('./DefaultHeader'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));



class DefaultLayout extends Component {
    render () {
        return (
            <div className="app">
                <AppHeader fixed>
                    <Suspense fallback={<LoadingSpinner/>}>
                        <DefaultHeader/>
                    </Suspense>
                </AppHeader>
                <div className="app-body">
                    <AppSidebar fixed display="lg">
                        <AppSidebarHeader />
                        <AppSidebarForm/>
                        <Suspense>
                            <AppSidebarNav navConfig={navigationItems}/>
                        </Suspense>
                        <AppSidebarFooter />
                        <AppSidebarMinimizer />
                    </AppSidebar>
                    <main className="main">
                        <AppBreadcrumb appRoutes={routes}/>
                        <Container fluid>
                            <Suspense fallback={<LoadingSpinner/>}>
                                <Switch>
                                    {routes.map((route, idx) => {
                                        return route.component ? (
                                            <Route
                                                key={idx}
                                                path={route.path}
                                                exact={route.exact}
                                                name={route.name}
                                                render={props => (
                                                    <route.component {...props} />
                                                )} />
                                        ) : (null);
                                    })}
                                    <Redirect from="/" to="/dashboard" />
                                </Switch>
                            </Suspense>
                        </Container>
                    </main>
                </div>
                <AppFooter>
                    <Suspense fallback={<LoadingSpinner/>}>
                        <DefaultFooter />
                    </Suspense>
                </AppFooter>
            </div>
        );
    }
}

export default DefaultLayout;
