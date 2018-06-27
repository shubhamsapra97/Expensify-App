import React from 'react';
import { Router, Route, Switch, Link, NavLink,  } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import expenseDashboardPage from '../components/expenseDashboardPage';
import addExpensePage from '../components/addExpensePage';
import editExpensePage from '../components/editExpensePage';
import notFoundPage from '../components/notFoundPage';
import LoginPage from '../components/loginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

// exporting for page redirects outside the components and not associted with routes.
export const history = createHistory();

const AppRouter = () => (

    // we could also have used 'BrowserRouter' but that doesn't allow passing history manually to components/routes.
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={expenseDashboardPage} />
                <PrivateRoute path="/create" component={addExpensePage} />
                <PrivateRoute path="/edit/:id" component={editExpensePage} />
                <Route component={notFoundPage} />
            </Switch>
        </div>
    </Router>

);

export default AppRouter;