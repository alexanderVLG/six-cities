import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Hotels} from './const';
import { offer} from './mocks/offer-mocks';
import { placeOffers } from './mocks/places-mocks';
import { reviews } from './mocks/reviews-mocks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      hotelsNumber = {Hotels.hotelsNumber}
      offer={offer}
      placeOffers={placeOffers}
      reviews={reviews}
    />
  </React.StrictMode>
);
