import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {smallCardFilm} from './mocks/films';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';


const store = createStore(
  reducer,
  composeWithDevTools(),

);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App movies = {smallCardFilm}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
