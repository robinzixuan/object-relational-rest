import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerIPC from '../ipc/client';

import configureStore from './store/configureStore';
import PageContainer from './containers/PageContainer';

registerIPC();

const store = configureStore();

class App extends React.Component {
    render() {
        return <PageContainer />;
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('App'));
