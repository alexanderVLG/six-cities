import { createReducer } from '@reduxjs/toolkit';
import { getOffers, changeCity, changeToggle, setSortedOffers, setSortingType } from './action';
import { CityType, OffersListType } from '../types/types';
import { offersList } from '../mocks/offers-list-mocks';

type initialStateProp = {
  city: CityType;
  offers: OffersListType[];
  toggle: boolean;
  sortedOffers: OffersListType[];
  sortingType: string;
}

const initialState: initialStateProp = {
  city: { name: 'Paris', location: { latitude: 48.85661, longitude: 2.351499, zoom: 13 } },
  offers: offersList,
  toggle: false,
  sortedOffers: [],
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
