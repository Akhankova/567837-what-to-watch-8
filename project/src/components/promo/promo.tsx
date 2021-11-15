import {useHistory} from 'react-router-dom';
import {AppRoute} from '../../const';
import { generatePath } from 'react-router-dom';
import { useSelector} from 'react-redux';
import HeaderScreen from '../header/header';
import React, { useState } from 'react';
import { getPromoFilm } from '../../store/promo-data/selectors';
import { FilmCardBg } from './film-card-bg';
import { BACKEND_URL } from '../../const';
import { api } from '../../index';
import {APIRoute} from '../../types/api';
import { getAuthorizationStatus } from '../../store/user-data/selectors';

function PromoScreen(): JSX.Element {
  const promo = useSelector(getPromoFilm);
  const [ favoriteStatus, setFavoriteStatus ] = useState(0);
  const authStatus = useSelector(getAuthorizationStatus);
  const history = useHistory();

  const onCardClickPlayHandler = () => {
    history.push(generatePath(AppRoute.Player, {id: promo.id}));
  };

  const onCardClickMyListHandler = () => {
    if (authStatus === 'UNKNOWN') {
      return history.push(AppRoute.SignIn);
    }
    if (favoriteStatus === 1) {
      setFavoriteStatus(0);
      api.post(`${BACKEND_URL}${APIRoute.Favorite}/${promo.id}/${0}`);
    }
    if (favoriteStatus === 0) {
      setFavoriteStatus(1);
      api.post(`${BACKEND_URL}${APIRoute.Favorite}/${promo.id}/${1}`);
    }
  };

  return (
    <section className="film-card">
      <FilmCardBg/>
      <h1 className="visually-hidden">WTW</h1>
      <HeaderScreen/>
      {promo ?
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promo.previewImage} alt={promo.title} width="218" height="327" />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{promo.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promo.genre}</span>
                <span className="film-card__year">{promo.released}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span onClick={onCardClickPlayHandler}>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  {favoriteStatus ?
                    <svg viewBox="0 0 18 14" width="18" height="14">
                      <use xlinkHref="#in-list"></use>
                    </svg> :
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>}

                  <span onClick={onCardClickMyListHandler}>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div> : ''}
    </section>
  );
}

export default React.memo(PromoScreen);

