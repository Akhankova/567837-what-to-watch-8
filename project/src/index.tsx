import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {createAPI} from './services/api';
import {AuthorizationStatus} from './types/api';
import {requireAuthorization} from './store/action';
import { loadFilms, loadFilmsFilter, loadPromo} from './store/api-actions';
import {rootReducer} from '../../project/src/store/root-reducer';
import {configureStore} from '@reduxjs/toolkit';

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

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
