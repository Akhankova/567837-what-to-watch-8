import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
//import {smallCardFilm} from './mocks/films';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import {AuthorizationStatus} from './types/api';
import {requireAuthorization} from './store/action';
import {ThunkAppDispatch} from './types/action';
import {loadFilms, loadPromo, checkAuthAction, loadFilmsFavorite} from './store/api-actions';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),

);
(store.dispatch as ThunkAppDispatch)(loadFilms());
(store.dispatch as ThunkAppDispatch)(loadFilmsFavorite());
(store.dispatch as ThunkAppDispatch)(loadPromo());
(store.dispatch as ThunkAppDispatch)(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
