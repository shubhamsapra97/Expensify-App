import React from 'react';
import { connect } from 'react-redux';
import ListItem from './expenseListItem';
import selectExpenses from '../selectors/expenses';

// Stateless Component
const expenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense)=>{
            return <ListItem key={expense.id} {...expense} />
        })}
    </div>
);

const mapStateToProps = (state) => {
    // things we need from store.
    return {
        expenses: selectExpenses(state.expenses , state.filters)
    };
};


//Connect Redux Store with the component
export default connect(mapStateToProps)(expenseList);
