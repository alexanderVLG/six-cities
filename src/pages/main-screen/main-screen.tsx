import { useState, useEffect } from 'react';
import Header from '../../components/layout/header';
import Map from '../../components/map/map';
import { Helmet } from 'react-helmet-async';
import { CITIES } from '../../const';
import { CityType, OffersListType, Point, Points} from '../../types/types';
import OfferList from '../../components/offer/offer-list';
import LocationsList from '../../components/locations/locations-list';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { setSortedOffers, changeToggle } from '../../store/action';
import { useAppSelector } from '../../hooks/use-app-selector';


type MainPageProps = {
  onCityClick: (value: string) => void;
  placesOptions: string[];
  cities: CityType[];
}

const MainScreen = ({ cities, onCityClick, placesOptions}: MainPageProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const currentCityName = useAppSelector((state) => state.city.name);
  const offersList = useAppSelector((state) => state.offers);
  const sortedOffers = useAppSelector((state) => state.sortedOffers);
  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>(undefined);
  useEffect(() => {
    const initialOffers = offersList.filter(
      (offer) => offer.city.name === currentCityName
    );
    dispatch(setSortedOffers(initialOffers));
  }, [currentCityName, offersList, dispatch]);
  const handleSortingOffers = (value: string) => {
    let result: OffersListType[] = [];

    const baseOffers = sortedOffers || offersList.filter((offer) => offer.city.name === currentCityName);

    switch(value){
      case 'Popular':
        result = baseOffers;
        break;
      case 'Price: low to high':
        result = baseOffers.toSorted((a, b) => a.price - b.price);
        break;
      case 'Price: high to low':
        result = baseOffers.toSorted((a, b) => b.price - a.price);
        break;
      case 'Top rated first':
        result = baseOffers.toSorted((a, b) => b.rating - a.rating);
        break;
      default:
        result = baseOffers;
    }
    dispatch(setSortedOffers(result));

    dispatch(changeToggle(false));
  };

  const points: Points = sortedOffers.map((offer) => ({
    title: offer.title,
    latitude: offer.location.latitude,
    longitude: offer.location.longitude,
    zoom: offer.location.zoom
  }));

  const currentCityData = cities.find((city) => city.name === currentCityName) ?? CITIES[0];
  const handleListItemHover = (listItemName: string) => {
    const currentPoint = points.find((point) => point.title === listItemName);

    setSelectedPoint(currentPoint);
  };

  const handleMarkerClick = (point: Point) => {
    setSelectedPoint(point);
  };

  return(
    <div className="page page--gray page--main">
      <Helmet>
        <title>Бронирование отелей онлайн.</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList
          onCityClick={onCityClick}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{sortedOffers.length} places to stay in {currentCityName}</b>
              <PlacesSorting
                placesOptions={placesOptions}
                handleSortingOffers={handleSortingOffers}
              />
              <OfferList
                filteredOffers={sortedOffers}
                onListItemHover={handleListItemHover}
              />
            </section>
            <div className="cities__right-section">
              <Map
                key={currentCityData.name}
                points={points}
                city={currentCityData}
                selectedPoint={selectedPoint}
                onMarkerClick={handleMarkerClick}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainScreen;
