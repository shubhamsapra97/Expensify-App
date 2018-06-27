import React from 'react';
import { connect } from 'react-redux';
import ListItem from './expenseListItem';
import selectExpenses from '../selectors/expenses';

// Stateless Component
const expenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
            <div className="list-item list-item--message">
                {!props.expenses.length && <span>No Expenses</span>}
            </div>
            
            {props.expenses.map((expense)=>{
                return <ListItem key={expense.id} {...expense} />
            })}
        </div>
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
