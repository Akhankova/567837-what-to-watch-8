import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function Logo(): JSX.Element {
  return (
    <Link className="logo__link" to={AppRoute.Main}>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  );
}

export default React.memo(Logo);
