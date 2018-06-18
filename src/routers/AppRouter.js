import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink,  } from 'react-router-dom';
import expenseDashboardPage from '../components/expenseDashboardPage';
import addExpensePage from '../components/addExpensePage';
import editExpensePage from '../components/editExpensePage';
import helpPage from '../components/helpPage';
import notFoundPage from '../components/notFoundPage';
import Header from '../components/Header';

const AppRouter = () => (

    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={expenseDashboardPage} exact={true} />
                <Route path="/create" component={addExpensePage} />
                <Route path="/edit/:id" component={editExpensePage} />
                <Route path="/help" component={helpPage} />
                <Route component={notFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>

);

export default AppRouter;