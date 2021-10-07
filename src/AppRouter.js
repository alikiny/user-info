import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './App';
import User from './components/User'

function AppRouter() {
    const history=createBrowserHistory()
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <Route path='/' component={App} exact={true} />
                    <Route path='/user/:id' component={User}/>
                </Switch>
            </div>

        </Router>
    );
}

export default AppRouter;