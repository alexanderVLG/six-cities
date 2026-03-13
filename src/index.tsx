import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { CITIES, PLACES_OPTIONS} from './const';
import { offersList } from './mocks/offers-list-mocks';
import { reviews } from './mocks/reviews-mocks';
import { nearOffers } from './mocks/near-offers-mocks';
import {store} from './store/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offersList={offersList}
        reviews={reviews}
        nearOffers={nearOffers}
        cities={CITIES}
        placesOptions={PLACES_OPTIONS}
      />
    </Provider>
  </React.StrictMode>
);
