import React from 'react'
import ReactDOM from 'react-dom/client'
import './app/layouts/styles.css'
// css from UI Material
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router/Routes.js';
import { StoreProvider } from './app/context/StoreContext.js';
import { configureStore } from './app/store/configureStore.js';
import { Provider } from 'react-redux';

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        {/* instead load the app component: <App />, we swap that for router provider */}
        <StoreProvider>
            <Provider store={store}>
            <RouterProvider router={router} />
            </Provider>
        </StoreProvider>
    </React.StrictMode>,
)
