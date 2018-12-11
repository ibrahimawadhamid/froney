import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = Loadable({
    loader: () => import('./containers/DefaultLayout'),
    loading
});
// Pages
const Login = Loadable({
    loader: () => import('./views/Pages/Login/Login'),
    loading
});
const Register = Loadable({
    loader: () => import('./views/Pages/Register/Register'),
    loading
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
