import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {smallCardFilm} from './mocks/films';

ReactDOM.render(
  <React.StrictMode>
    <App movies = {smallCardFilm}/>
  </React.StrictMode>,
  document.getElementById('root'));
