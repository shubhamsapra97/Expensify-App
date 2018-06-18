import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home Page</NavLink>
        <NavLink to="/create" activeClassName="is-active">Add Expense Page</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help Page</NavLink>
    </div>
);

export default Header;