import React from 'react';
import { connect } from 'react-redux';
import { actionCreators as modelEditorActionCreators } from '../ducks/modelEditor';
import { FormGroup, InputGroup, Button } from '@blueprintjs/core';

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
                <h1>Schema Editor</h1>
                <FormGroup label="Project Name" labelInfo={"(required)"}>
                    <InputGroup value={state.modelEditor.projectName} onChange={(event) => updateProjectName(event.target.value)} />
                </FormGroup>

                <Button
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
                                    onClick={() => {
                                        addAttribute(cls.id);
                                    }}
                                >
                                    Add Attribute
                                </Button>
                                <Button
                                    onClick={() => {
                                        deleteClass(cls.id);
                                    }}
                                >
                                    Delete Class
                                </Button>
                                <FormGroup label="Class Name" labelInfo={"(required)"}>
                                    <InputGroup value={cls.className} onChange={(event) => updateClassName(cls.id, event.target.value)} />
                                </FormGroup>
                                <FormGroup label="Endpoint Name" labelInfo={"(required)"}>
                                    <InputGroup value={cls.endpointName} onChange={(event) => updateEndpointName(cls.id, event.target.value)} />
                                </FormGroup>
                                {
                                    cls.attributes.map(attr => {
                                        return (
                                            <div className="app-attribute-form" key={attr.id}>
                                                <Button
                                                    onClick={() => {
                                                        deleteAttribute(attr.id);
                                                    }}
                                                >
                                                    Delete Attribute
                                                </Button>
                                                <FormGroup label="Name" labelInfo={"(required)"}>
                                                    <InputGroup value={attr.name} onChange={(event) => updateAttributeName(attr.id, event.target.value)} />
                                                </FormGroup>
                                                <FormGroup label="Type" labelInfo={"(required)"}>
                                                    <InputGroup value={attr.type} onChange={(event) => updateAttributeType(attr.id, event.target.value)} />
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