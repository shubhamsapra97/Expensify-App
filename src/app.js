import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import expensesReducer from './reducers/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({description:'water bill' , note:'sfsd' , amount:1500 , createdAt:200}));
store.dispatch(addExpense({description:'gas bill' , note:'sfsd' , amount:100 , createdAt:800}));
store.dispatch(addExpense({description:'rent' , note:'sfsd' , amount:2000 , createdAt:500}));

store.dispatch(setTextFilter());

const visibleExpenses = getVisibleExpenses(store.getState().expenses , store.getState().filters);

console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));