import { useSelector} from 'react-redux';
import React from 'react';
import { getPromoFilm } from '../../store/promo-data/selectors';

export function FilmCardBg(): JSX.Element {
  const promo = useSelector(getPromoFilm);
  return (
    <div className="film-card__bg">
      <img src={promo.backgroundImage} alt={promo.title} />
    </div>
  );
}

export default React.memo(FilmCardBg);
