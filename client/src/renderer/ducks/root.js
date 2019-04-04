import { combineReducers } from 'redux';
import modelEditor from './modelEditor';
import ui from './ui';

const reducerRoot = combineReducers({
    modelEditor,
    ui,
});

export default reducerRoot;