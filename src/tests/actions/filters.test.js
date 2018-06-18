import moment from 'moment';
import { setTextFilter , sortByAmount , sortByDate , setStartDate, setEndDate } from '../../actions/filters';

// expect('should generate setStartDate action object',()=>{
//     const action = setStartDate(moment(0));
//     expect(action).toEqual({
//         type: 'SET_START_DATE',
//         startDate: moment(0)
//     });
// });

// expect('should generate setEndDate action object' , ()=>{
//     const action = setEndDate(moment(0));
//     expect(action).toEqual({
//         type: 'SET_END_DATE',
//         endDate: moment(0)
//     });
// });

expect('test setTextFilter with values provided' , ()=>{
    const action = setTextFilter('hello');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'hello'
    });
});

expect('test setTextFilter with default values',()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: '' 
    });
});