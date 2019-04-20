import { createActions, handleActions } from 'redux-actions';
import uuidv4 from 'uuid/v4';

const prefix = 'modelEditor';

const initialState = {
    projectName: 'New Project',
    classes: []
};

/*
* Field related helper functions
*/

const generateFieldID = () => {
    return uuidv4();
}

/*
* Action Creators and Reducers
*/
export const actionCreators = createActions({
    UPDATE_PROJECT_NAME: undefined,
    ADD_CLASS: undefined,
    DELETE_CLASS: class_id => class_id,
    UPDATE_CLASS_NAME: (class_id, newName) => ({
        id: class_id,
        value: newName
    }),
    UPDATE_ENDPOINT_NAME: (class_id, newName) => ({
        id: class_id,
        value: newName
    }),
    ADD_ATTRIBUTE: class_id => class_id,
    DELETE_ATTRIBUTE: attribute_id => attribute_id,
    UPDATE_ATTRIBUTE_NAME: (attribute_id, newName) => ({
        id: attribute_id,
        value: newName
    }),
    UPDATE_ATTRIBUTE_TYPE: (attribute_id, newType) => ({
        id: attribute_id,
        value: newType,
    }),
}, {
    prefix
});

const reducer = handleActions({
    UPDATE_PROJECT_NAME: (state, action) => ({
        ...state,
        projectName: action.payload
    }),
    ADD_CLASS: (state) => ({
        ...state,
        classes: [...state.classes, {
            id: generateFieldID(),
            className: 'MyObject',
            endpointName: 'myobjects',
        }]
    }),
    DELETE_CLASS: (state, action) => ({
        ...state,
        classes: state.classes.filter(cls => cls.id !== action.payload)
    }),
    UPDATE_CLASS_NAME: (state, action) => ({
        ...state,
        classes: state.classes.map(cls => ({
            ...cls,
            className: action.payload.id === cls.id ? action.payload.value : cls.className
        }))
    }),
    UPDATE_ENDPOINT_NAME: (state, action) => ({
        ...state,
        classes: state.classes.map(cls => ({
            ...cls,
            endpointName: action.payload.id === cls.id ? action.payload.value : cls.endpointName
        }))
    }),
    ADD_ATTRIBUTE: (state, action) => ({
        ...state,
        classes: state.classes.map(cls => cls.id !== action.payload ? cls : ({
            ...cls,
            attributes: [...cls.attributes, {
                id: generateFieldID(),
                name: "my_attribute",
                type: ""
            }]
        }))
    }),
    DELETE_ATTRIBUTE: (state, action) => ({
        ...state,
        classes: state.classes.map(cls => ({
            ...cls,
            attributes: cls.attributes.filter(a => a.id !== action.payload)
        }))
    }),
    UPDATE_ATTRIBUTE_NAME: (state, action) => ({
        ...state,
        classes: state.classes.map(cls => ({
            ...cls,
            attributes: cls.attributes.map(a => ({
                ...a,
                name: a.id === action.payload.id ? action.payload.value : a.name
            }))
        }))
    }),
    UPDATE_ATTRIBUTE_TYPE: (state, action) => {
        return {
            ...state,
            classes: state.classes.map(cls => ({
                ...cls,
                attributes: cls.attributes.map(a => ({
                    ...a,
                    type: a.id === action.payload.id ? action.payload.value : a.type
                }))
            }))
        };
    }
}, initialState, {
    prefix
});

export default reducer;