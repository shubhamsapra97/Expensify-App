import { createStore , combineReducers } from 'redux';
import uuid from 'uuid';

// const demoState = {
//     expenses: [{
//         id: 'sadsa',
//         description: 'sdfsdf',
//         note: 'sdfffdfs',
//         amount: 124324,
//         createdAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount',
//         startDate: undefined,
//         endDate: undefined
//     }
// };

const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id : uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id , updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const sortByDate = () =>({
    type: 'SORT_BY_DATE'
});

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

const getVisibleExpenses = (expenses, { text , sortBy , startDate , endDate }) => {
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1
        }
    });
};

const  expensesReducerDefaultState = [];

const expenseReducer = (state = expensesReducerDefaultState , action) => {

    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=>{
                return id !== action.id;
            });
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                else{
                    return expense;
                }
            });
        default: 
            return state;
    }

};

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = filtersReducerDefaultState , action) => {
   switch(action.type){
       case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
       default:
            return state; 
   } 
};

const store = createStore(
  combineReducers({
      expenses: expenseReducer,
      filters: filterReducer
  })  
);

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses , state.filters);
    console.log(visibleExpenses);
});

// store.dispatch(setStartDate(125));
// store.dispatch(setEndDate(1000));

const expense1 = store.dispatch(addExpense({description: 'rent' , amount: 1000 , createdAt: -1000}));
const expense2 = store.dispatch(addExpense({description: 'Coffee' , amount: 300 , createdAt: -200}));

// store.dispatch(removeExpense({ id: expense1.expense.id }));

// store.dispatch(editExpense(expense2.expense.id, {amount: 1000}));

// store.dispatch(setTextFilter('fee'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

