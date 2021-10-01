import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  GENRE: 'Drama',
  YEAR: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App genre = {Setting.GENRE} year = {Setting.YEAR}/>
  </React.StrictMode>,
  document.getElementById('root'));
