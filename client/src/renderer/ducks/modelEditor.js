import { createActions, handleActions } from 'redux-actions';

const prefix = 'ui';

const initialState = {
    
};

export const actionCreators = createActions({

}, {
    prefix
});

const reducer = handleActions({
   
}, initialState, {
    prefix
});

export default reducer;