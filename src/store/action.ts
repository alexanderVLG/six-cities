import { createAction } from '@reduxjs/toolkit';

export const getOffers = createAction('city/getOffers');

export const changeCity = createAction<string>('city/changeCity');
