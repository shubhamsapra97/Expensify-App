import React from 'react';
import ExpenseList from './expenseList';
import ExpenseListFilters from './expenseListFilter';
import ExpensesSummary from './expensesSummary';

const expenseDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default expenseDashboardPage;