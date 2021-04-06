import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/layout/App';
import {oldindex} from './store/oldindex';
import {Provider} from 'react-redux';

// TODO(@jeremyhabit): oldindex as store ?
ReactDOM.render(
    <React.StrictMode>
        <Provider store={oldindex}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
