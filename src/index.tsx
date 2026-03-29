import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { PLACES_OPTIONS} from './const';
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
        reviews={reviews}
        nearOffers={nearOffers}
        placesOptions={PLACES_OPTIONS}
      />
    </Provider>
  </React.StrictMode>
);
