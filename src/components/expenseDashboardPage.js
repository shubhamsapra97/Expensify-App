import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './expenseListFilter';

const expenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default expenseDashboardPage;