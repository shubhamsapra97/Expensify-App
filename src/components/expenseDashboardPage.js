import React from 'react';
import ExpenseList from './expenseList';
import ExpenseListFilters from './expenseListFilter';

const expenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default expenseDashboardPage;