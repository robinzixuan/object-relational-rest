import React from 'react';
import ReactDOM from 'react-dom';
import registerIPC from '../ipc/client';

registerIPC();

class App extends React.Component {
    render() {
        return <div>A proof that React is working!</div>
    }
}

ReactDOM.render(<App />, document.getElementById('App'));
