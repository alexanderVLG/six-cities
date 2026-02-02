import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Hotels, CITIES} from './const';
import { offers} from './mocks/offer-mocks';
import { placeOffers } from './mocks/places-mocks';
import { reviews } from './mocks/reviews-mocks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offer={offers}
      hotelsNumber = {Hotels.hotelsNumber}
      placeOffers={placeOffers}
      reviews={reviews}
      cities={CITIES}
    />
  </React.StrictMode>
);
