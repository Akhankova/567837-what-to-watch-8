import { SmallFilmCard } from '../../types/small-film-card';
import { PromoDateState } from '../../types/state';
import { setPromo } from '../action';
import { createReducer } from '@reduxjs/toolkit';

export const initialState: PromoDateState= {
  promoFilm: {} as SmallFilmCard || null,
};

export const promoData = createReducer(initialState, (builder) => {
  builder
    .addCase(setPromo, (state, action) => {
      state.promoFilm = action.payload.promo;
    });
});

