import { createAction } from '@reduxjs/toolkit';
import { offersList } from '../mocks/offers-list-mocks';
import { CityType } from '../types/types';

export const getOffers = createAction('city/getOffers');

export const changeCity = createAction<CityType>('city/changeCity');

export const setSortedOffers = createAction<typeof offersList>('offer/setSortedOffer');

export const changeToggle = createAction<boolean>('sorting/changeToggle');

export const setSortingType = createAction<string>('sorting/setSortingType');
