import React from 'react';
import { connect } from 'react-redux';
import { FormGroup, InputGroup, Button, Navbar, Alignment } from '@blueprintjs/core';
import Autosuggest from 'react-autosuggest';
import { actionCreators as modelEditorActionCreators } from '../ducks/modelEditor';
import { djangoAttributeTypes } from '../constants/attributeTypes';
import { requestSaveSchema, requestGenerateCode } from '../../ipc/client';

class ModelEditorPage extends React.Component {

    render() {
        const {
            state,
            updateProjectName,
            addClass,
            deleteClass,
            updateClassName,
            updateEndpointName,
            addAttribute,
            deleteAttribute,
            updateAttributeName,
            updateAttributeType,
        } = this.props;

        return (
            <div>
                <Navbar>
                    <Navbar.Group align={Alignment.LEFT}>
                        <Navbar.Heading>Schema Editor</Navbar.Heading>
                    </Navbar.Group>
                    <Navbar.Group align={Alignment.RIGHT}>
                        <Button
                            minimal
                            icon="floppy-disk"
                            onClick={() => {
                                requestSaveSchema(state.modelEditor);
                            }}
                        >
                            Save Schema
                        </Button>
                        <Button
                            minimal
                            icon="code"
                            onClick={() => {
                                requestGenerateCode(state.modelEditor);
                            }}
                        >
                            Generate Code
                        </Button>
                    </Navbar.Group>
                </Navbar>
                <FormGroup label="Project Name" labelInfo={"(required)"}>
                    <InputGroup value={state.modelEditor.projectName} onChange={(event) => updateProjectName(event.target.value)} />
                </FormGroup>

                <Button
                    intent="success"
                    icon="add"
                    onClick={() => {
                        addClass();
                    }}
                >
                    Add Class
                </Button>

                {
                    state.modelEditor.classes.map(cls => {

                        return (
                            <div className="app-class-form" key={cls.id}>
                                <Button
                                    intent="primary"
                                    icon="add"
                                    onClick={() => {
                                        addAttribute(cls.id);
                                    }}
                                >
                                    Add Attribute
                                </Button>
                                <Button
                                    intent="danger"
                                    icon="delete"
                                    onClick={() => {
                                        deleteClass(cls.id);
                                    }}
                                >
                                    Delete Class
                                </Button>
                                <FormGroup label="Class Name" labelInfo={"(class name used in generated code, preferably starting with Uppercase)"}>
                                    <InputGroup value={cls.className} onChange={(event) => updateClassName(cls.id, event.target.value)} />
                                </FormGroup>
                                <FormGroup label="Endpoint Name" labelInfo={"(API endpoint URL, preferably lowercase plural noun)"}>
                                    <InputGroup value={cls.endpointName} onChange={(event) => updateEndpointName(cls.id, event.target.value)} />
                                </FormGroup>
                                {
                                    cls.attributes.map(attr => {
                                        return (
                                            <div className="app-attribute-form" key={attr.id}>
                                                <Button
                                                    intent="danger"
                                                    icon="delete"
                                                    onClick={() => {
                                                        deleteAttribute(attr.id);
                                                    }}
                                                >
                                                    Delete Attribute
                                                </Button>
                                                <FormGroup label="Name" labelInfo={"(preferably snake_case)"}>
                                                    <InputGroup value={attr.name} onChange={(event) => updateAttributeName(attr.id, event.target.value)} />
                                                </FormGroup>
                                                <FormGroup label="Type" labelInfo={"(See templates, can be any legal Django field types)"}>
                                                    <Autosuggest
                                                        suggestions={djangoAttributeTypes}
                                                        onSuggestionsFetchRequested={() => null}
                                                        onSuggestionsClearRequested={() => null}
                                                        getSuggestionValue={(suggestion) => suggestion.value}
                                                        renderSuggestion={(suggestion) => (
                                                            <div>{suggestion.value}<br /><small>{suggestion.description}</small></div>
                                                        )}
                                                        shouldRenderSuggestions={() => true}
                                                        inputProps={{
                                                            placeholder: 'Click to see templates',
                                                            value: attr.type,
                                                            onChange: (_, { newValue }) => {
                                                                updateAttributeType(attr.id, newValue);
                                                            }
                                                        }}
                                                    />
                                                </FormGroup>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    state,
});

const mapDispatchToProps = (dispatch) => ({
    updateProjectName: (newName) => dispatch(modelEditorActionCreators.updateProjectName(newName)),
    addClass: () => dispatch(modelEditorActionCreators.addClass()),
    deleteClass: (class_id) => dispatch(modelEditorActionCreators.deleteClass(class_id)),
    updateClassName: (class_id, newName) => dispatch(modelEditorActionCreators.updateClassName(class_id, newName)),
    updateEndpointName: (class_id, newName) => dispatch(modelEditorActionCreators.updateEndpointName(class_id, newName)),
    addAttribute: (class_id) => dispatch(modelEditorActionCreators.addAttribute(class_id)),
    deleteAttribute: (attribute_id) => dispatch(modelEditorActionCreators.deleteAttribute(attribute_id)),
    updateAttributeName: (attribute_id, newName) => dispatch(modelEditorActionCreators.updateAttributeName(attribute_id, newName)),
    updateAttributeType: (attribute_id, newType) => dispatch(modelEditorActionCreators.updateAttributeType(attribute_id, newType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModelEditorPage);