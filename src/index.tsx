import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Hotels} from './const';
import { Offers} from './mocks/offers';
import { Favorites } from './mocks/favorites';
import { Comments } from './mocks/comments';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      hotelsNumber = {Hotels.hotelsNumber}
      offer={Offers}
      favorite={Favorites}
      reviews={Comments}
    />
  </React.StrictMode>
);
