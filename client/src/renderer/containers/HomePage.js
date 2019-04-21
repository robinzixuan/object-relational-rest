import React from 'react';
import { connect } from 'react-redux';
import { actionCreators as uiActionCreator } from '../ducks/ui';
import { Button } from '@blueprintjs/core';
import { requestLoadSchema } from '../../ipc/client';

class HomePage extends React.Component {

    render() {

        const {
            state,
            changePage
        } = this.props;

        return (
            <div className="app-homepage">
                <div className="app-homepage__center">
                    <Button
                        large
                        minimal
                        className="app-homepage__center__button"
                        icon="add"
                        onClick={() => {
                            changePage('ModelEditorPage');
                        }}
                    >
                        New Project
                    </Button>
                    <Button
                        large
                        minimal
                        className="app-homepage__center__button"
                        icon="edit"
                        onClick={() => {
                            requestLoadSchema();
                        }}
                    >
                        Open Project
                    </Button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    state,
});

const mapDispatchToProps = (dispatch) => ({
    changePage: (pageName) => dispatch(uiActionCreator.changePage(pageName))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);