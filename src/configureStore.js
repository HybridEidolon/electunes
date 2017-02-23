import {createStore} from 'redux';

const reducer = ({}) => {return {};};

export const configureStore = () => {
    if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
        return createStore(reducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__());
    } else {
        return createStore(reducer, {});
    }
}

export default configureStore;
