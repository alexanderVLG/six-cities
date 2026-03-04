import { createReducer } from '@reduxjs/toolkit';
import { getOffers, changeCity } from './action';
import { offersList } from '../mocks/offers-list-mocks';
import { CITIES } from '../const';


const initialState = {
  city: 'Paris',
  offers: [] as typeof offersList
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getOffers, (state) => {
      state.offers = offersList;
    })
    .addCase(changeCity, (state) => {
      state.city = CITIES[0];
    });
});


export {reducer};
