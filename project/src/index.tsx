import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
//import {SmallFilmCard} from './types/small-film-card';
//import {smallCardFilm} from './mocks/films';

const Setting = {
  GENRE: 'Drama',
  YEAR: 2014,
  HEAD_CARD_TITLE: 'The Grand Budapest Hotel',
};

ReactDOM.render(
  <React.StrictMode>
    <App genre = {Setting.GENRE} year = {Setting.YEAR} headCardTitle = {Setting.HEAD_CARD_TITLE}/>
  </React.StrictMode>,
  document.getElementById('root'));
