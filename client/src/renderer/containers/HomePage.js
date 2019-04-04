import React from 'react';
import { connect } from 'react-redux';
import { uiActionCreators } from '../ducks/ui';

class HomePage extends React.Component {

    render() {

        const {
            state,
            changePage
        } = this.props;

        return (
            <div>
                HomePage
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);