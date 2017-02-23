import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import App from './App.jsx';

const rootElementId = 'app';

ReactDOM.render(
    <AppContainer>
        <App/>
    </AppContainer>,
    document.getElementById(rootElementId)
);

if (module.hot) {
    module.hot.accept('./App.jsx', () => {
        render(
            <AppContainer>
                <App/>
            </AppContainer>,
            document.getElementById(rootElementId)
        );
    });
}
