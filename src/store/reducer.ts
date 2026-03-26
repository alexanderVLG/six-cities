import { createReducer } from '@reduxjs/toolkit';
import { getOffers, changeCity, changeToggle, setSortedOffers, setSortingType } from './action';
import { OffersListType } from '../types/types';
import { offersList } from '../mocks/offers-list-mocks';

const initialState = {
  city: { name: 'Paris', location: { latitude: 48.8566, longitude: 2.3522, zoom: 10 } },
  offers: offersList,
  toggle: false,
  sortedOffers: [] as OffersListType[],
  sortingType: 'Popular'
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
    })
    .addCase(setSortedOffers, (state, action) => {
      state.sortedOffers = action.payload;
    })
    .addCase(setSortingType, (state, action) => {
      state.sortingType = action.payload;
    });
});


export {reducer};
