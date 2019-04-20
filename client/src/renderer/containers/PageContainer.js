import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Alignment } from '@blueprintjs/core';
import { uiActionCreators } from '../ducks/ui';
import HomePage from './HomePage';

class PageContainer extends React.Component {

    render() {
        const {
            state,
            changePage
        } = this.props;

        let page = null;

        if (state.ui.page === 'ModelEditorPage') {
            // TODO: create ModelEditorPage
        } else {
            page = <HomePage />
        }

        return (
            <div>
                {/* <Navbar>
                    <Navbar.Group align={Alignment.LEFT}>
                        <Navbar.Heading>Object Relational REST</Navbar.Heading>
                    </Navbar.Group>
                </Navbar> */}

                { page }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    state,
});

const mapDispatchToProps = (dispatch) => ({
    changePage: (pageName) => dispatch(uiActionCreators.changePage(pageName))
});

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);