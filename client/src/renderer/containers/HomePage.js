import React from 'react';
import { connect } from 'react-redux';
import { actionCreators as uiActionCreator } from '../ducks/ui';
import { Button } from '@blueprintjs/core';

class HomePage extends React.Component {

    render() {

        const {
            state,
            changePage
        } = this.props;

        return (
            <div>
                HomePage

                <Button
                    onClick={() => {
                        changePage('ModelEditorPage');
                    }}
                >
                    New Project
                </Button>
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