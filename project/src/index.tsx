import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { createAPI } from './services/api';
import { AuthorizationStatus } from './types/api';
import { requireAuthorization } from './store/action';
import { checkAuthAction, loadFilms, loadFilmsFilter, loadPromo } from './store/api-actions';
import { rootReducer } from './store/root-reducer';
import { configureStore } from '@reduxjs/toolkit';
import { ToastContainer } from 'react-toastify';

export const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

store.dispatch(loadFilms());
store.dispatch(loadFilmsFilter());
store.dispatch(loadPromo());
store.dispatch(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ToastContainer/>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
