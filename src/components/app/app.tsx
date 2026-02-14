import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import { OffersListType, OfferType, ReviewType } from '../../types';
import { AppRoute, AuthorizationStatus} from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';

type AppHotelsProps = {
  hotelsNumber: number;
  offersList: OffersListType[];
  offers: OfferType[];
  reviews: ReviewType[];
  cities: string[];
  placesOptions: string[];
}

function App({hotelsNumber, offers, offersList, reviews, cities, placesOptions}: AppHotelsProps): JSX.Element {
  const [currentCity, setCurrentCity] = useState('Amsterdam');

  const handleCityLinkClick = (value: string) => {
    setCurrentCity(value);
  };

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.MAIN}
            element={
              <MainScreen
                hotelsNumber={hotelsNumber}
                offersList={offersList}
                cities={cities}
                onCityClick={handleCityLinkClick}
                currentCity={currentCity}
                placesOptions={placesOptions}
              />
            }
          />
          <Route
            path={AppRoute.FAVORITES}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <FavoritesScreen offers={offers} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.LOGIN}
            element={<LoginScreen />}
          />
          <Route
            path={AppRoute.OFFER}
            element={<OfferScreen reviews={reviews}/>}
          />
          <Route
            path="*"
            element={<NotFoundScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
