import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  CARDS_COUNT: 20,
  GENRE: 'Drama',
  YEAR: 2014,
  HEAD_CARD_TITLE: 'The Grand Budapest Hotel',
};

ReactDOM.render(
  <React.StrictMode>
    <App genre = {Setting.GENRE} year = {Setting.YEAR} cardsCount={Setting.CARDS_COUNT} headCardTitle = {Setting.HEAD_CARD_TITLE}/>
  </React.StrictMode>,
  document.getElementById('root'));
