import Header from '../../components/layout/header';
import Map from '../../components/map/map';
import { Helmet } from 'react-helmet-async';
import { PlaceOfferType, Points } from '../../types';
import OfferList from '../../components/offer/offer-list';
import LocationsList from '../../components/locations/locations-list';
import PlacesSorting from '../../components/places-sorting/places-sorting';


type MainPageProps = {
  hotelsNumber: number;
  placeOffers: PlaceOfferType[];
  cities: string[];
  onCityClick: (value: string) => void;
  currentCity: string;
  placesOptions: string[];
}

const MainScreen = ({hotelsNumber, cities, onCityClick, currentCity, placesOptions, placeOffers}: MainPageProps): JSX.Element => {
  const filteredOffers = placeOffers.filter(
    (offer) => offer.city.name === currentCity
  );

  const points: Points = filteredOffers.map((offer) => ({
    title: offer.title,
    latitude: offer.location.latitude,
    longitude: offer.location.longitude,
    zoom: offer.location.zoom
  }));

  const currentCityData = filteredOffers[0]?.city || placeOffers[0]?.city;

  return(
    <div className="page page--gray page--main">
      <Helmet>
        <title>Бронирование отелей онлайн.</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList cities={cities} onCityClick={onCityClick} currentCity={currentCity}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{hotelsNumber} places to stay in Amsterdam</b>
              <PlacesSorting placesOptions={placesOptions} />
              <OfferList placeOffer={placeOffers}/>
            </section>
            <div className="cities__right-section">
              <Map
                points={points}
                city={currentCityData}
                placeOffers={filteredOffers}
                selectedPoint={undefined}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainScreen;
