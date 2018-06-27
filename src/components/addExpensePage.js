import React from 'react';
import ExpenseForm from './expenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';

const addExpensePage = (props) => (
    <div>
        <div className="page-header">
            <div className="content-container">
             <h1 className="page-header__title">Add Expense</h1>
            </div>
        </div>
        <div className="content-container">
            <ExpenseForm onSubmit={(expense)=>{
                props.dispatch(startAddExpense(expense));
                
                // only works inside component assciated with a Route.
                props.history.push('/');
            }} />
        </div>
    </div>
);

export default connect()(addExpensePage)