import { createReducer } from '@reduxjs/toolkit';
import { getOffers, changeCity } from './action';
import { offersList } from '../mocks/offers-list-mocks';

const initialState = {
  city: 'Paris',
  offers: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getOffers, (state) => {
      state.offers = offersList;
    });
});


export {reducer};
