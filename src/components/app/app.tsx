import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import { ReviewType, NearOffersType, CityType } from '../../types/types';
import { AppRoute, AuthorizationStatus} from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { changeCity } from '../../store/action';
import MainScreen from '../../pages/main-screen/main-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';

type AppHotelsProps = {
  reviews: ReviewType[];
  nearOffers: NearOffersType[];
  placesOptions: string[];
}

function App({ reviews, placesOptions, nearOffers}: AppHotelsProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleCityLinkClick = (value: CityType) => {
    dispatch(changeCity(value));
  };

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.MAIN}
            element={
              <MainScreen
                onCityClick={handleCityLinkClick}
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
                <FavoritesScreen />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.LOGIN}
            element={<LoginScreen />}
          />
          <Route
            path={AppRoute.OFFER}
            element={
              <OfferScreen
                reviews={reviews}
                nearOffers={nearOffers}
              />
            }
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
