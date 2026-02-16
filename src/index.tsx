import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Hotels, CITIES, PLACES_OPTIONS} from './const';
import { offersList } from './mocks/offers-list-mocks';
import { reviews } from './mocks/reviews-mocks';
import { nearOffers } from './mocks/near-offers-mocks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      hotelsNumber = {Hotels.hotelsNumber}
      offersList={offersList}
      reviews={reviews}
      nearOffers={nearOffers}
      cities={CITIES}
      placesOptions={PLACES_OPTIONS}
    />
  </React.StrictMode>
);
