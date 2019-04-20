import React from 'react';
import { connect } from 'react-redux';
import { actionCreators as modelEditorActionCreators } from '../ducks/modelEditor';

class ModelEditorPage extends React.Component {

    render() {
        const {

        } = this.props;

        return (
            <div>
                ModelEditorPage
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    state,
});

const mapDispatchToProps = (dispatch) => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(ModelEditorPage);