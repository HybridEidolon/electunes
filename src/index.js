import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import App from './App.jsx';
import configureStore from './configureStore'

const rootElementId = 'app';

const store = configureStore();

ReactDOM.render(
    <AppContainer>
        <App store={store}/>
    </AppContainer>,
    document.getElementById(rootElementId)
);

if (module.hot) {
    module.hot.accept('./App.jsx', () => {
        render(
            <AppContainer>
                <App store={store}/>
            </AppContainer>,
            document.getElementById(rootElementId)
        );
    });
}
