import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {smallCardFilm, smallCardFilmPromo} from './mocks/films';

ReactDOM.render(
  <React.StrictMode>
    <App movies = {smallCardFilm} promoMovie={smallCardFilmPromo}/>
  </React.StrictMode>,
  document.getElementById('root'));
