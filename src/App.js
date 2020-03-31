import React from 'react';
import Trending from './modules/components/trending/Trending';
import "./App.css"
import { Provider } from 'react-redux';
import store from './modules/store'
import Details from './modules/components/details/Details';

function App() {
    return (
        <Provider store={store}>
            <div className="app-container">
                <Trending />
                <Details />
            </div>
        </Provider >
    );
}

export default App;
