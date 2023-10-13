import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import { createRoot } from 'react-dom/client';

import reducer from './reducers';

import './index.css';
import App from './App';

const store = configureStore({reducer});
const root = createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)