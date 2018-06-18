import { addExpense , removeExpense , editExpense } from '../../actions/expenses';

test('should setup remove expense action object' , ()=>{
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('test edit action' , ()=>{
    const updates = {
        description: 'hello',
        amount: 490
    };
    const action = editExpense('123abc' , updates);
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'hello',
            amount: 490
        }
    });
});

test('test add action when values provided' , ()=>{
    const expenseData = {
        description: 'rent',
        amount: 190500,
        createdAt: 1000,
        note: 'This was last months rent'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('test action with default values' , ()=>{
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
        }
    });
});