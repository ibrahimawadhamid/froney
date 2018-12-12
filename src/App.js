import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import './App.scss';
import LoadingSpinner from './components/UI/LoadingSpinner/LoadingSpinner';

// Containers
const DefaultLayout = Loadable({
    loader: () => import('./containers/DefaultLayout'),
    loading: LoadingSpinner
});
// Pages
const Login = Loadable({
    loader: () => import('./views/Pages/Login/Login'),
    loading: LoadingSpinner
});
const Register = Loadable({
    loader: () => import('./views/Pages/Register/Register'),
    loading: LoadingSpinner
});

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    {/*
                    <Route exact path="/about" name="About" component={About} />
                    */}
                    <Route exact path="/login" name="Login" component={Login} />
                    <Route exact path="/register" name="Register" component={Register} />
                    <Route path="/" name="Default" component={DefaultLayout} />
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
