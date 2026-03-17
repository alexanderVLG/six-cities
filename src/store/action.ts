import { createAction } from '@reduxjs/toolkit';
import { offersList } from '../mocks/offers-list-mocks';

export const getOffers = createAction('city/getOffers');

export const changeCity = createAction<string>('city/changeCity');

export const setSortedOffers = createAction<typeof offersList>('offer/setSortedOffer');

export const changeToggle = createAction<boolean>('sorting/changeToggle');

export const setSortingType = createAction<string>('sorting/setSortingType');
