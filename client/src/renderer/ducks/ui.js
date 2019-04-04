import { createActions, handleActions } from 'redux-actions';

const prefix = 'ui';

const initialState = {
    page: 'HomePage'
};

export const actionCreators = createActions({
    CHANGE_PAGE: undefined,
}, {
    prefix
});

const reducer = handleActions({
    CHANGE_PAGE: (state, action) => {
        return {
            ...state,
            page: action.payload
        }
    }
}, initialState, {
    prefix
});

export default reducer;
