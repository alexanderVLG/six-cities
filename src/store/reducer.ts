import { createReducer } from '@reduxjs/toolkit';
import { getOffers, changeCity, changeToggle } from './action';
import { offersList } from '../mocks/offers-list-mocks';

const initialState = {
  city: 'Paris',
  offers: [] as typeof offersList,
  toggle: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getOffers, (state) => {
      state.offers = offersList;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeToggle, (state, action) => {
      state.toggle = action.payload;
    });
});


export {reducer};
