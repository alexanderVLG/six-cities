import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import { AppRoute, AuthorizationStatus} from '../../const';
import MainScreen from '../pages/main-screen/main-screen';
import FavoritesScreen from '../pages/favorites-screen/favorites-screen';
import LoginScreen from '../pages/login-screen/login-screen';
import OfferScreen from '../pages/offer-screen/offer-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {Offer} from '../../types/offer';
import { Favorite } from '../../types/favorite';
import { Comment } from '../../types/comment';

type AppHotelsProps = {
  hotelsNumber: number;
  offer: Offer[];
  favorite: Favorite[];
  reviews: Comment[];
}

function App({hotelsNumber, offer, favorite, reviews}: AppHotelsProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={
              <MainScreen
                hotelsNumber={hotelsNumber}
                offer={offer}
              />
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}
              >
                <FavoritesScreen favorite={favorite} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
          />
          <Route
            path={AppRoute.Offer}
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
