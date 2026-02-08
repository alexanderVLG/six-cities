import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Hotels, CITIES, PLACES_OPTIONS} from './const';
import { placeOffers } from './mocks/places-mocks';
import { reviews } from './mocks/reviews-mocks';
import { CITY } from './mocks/city';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      hotelsNumber = {Hotels.hotelsNumber}
      placeOffers={placeOffers}
      reviews={reviews}
      cities={CITIES}
      placesOptions={PLACES_OPTIONS}
      city={CITY}
    />
  </React.StrictMode>
);
