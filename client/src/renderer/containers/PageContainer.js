import React from 'react';
import { connect } from 'react-redux';
import { uiActionCreators } from '../ducks/ui';
import HomePage from './HomePage';
import ModelEditorPage from './ModelEditorPage';

class PageContainer extends React.Component {

    render() {
        const {
            state,
            changePage
        } = this.props;

        let page = null;

        if (state.ui.page === 'ModelEditorPage') {
            page = <ModelEditorPage />
        } else {
            page = <HomePage />
        }

        return (
            <div>
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