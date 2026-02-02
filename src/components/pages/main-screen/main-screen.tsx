import Header from '../../layout/header';
import Map from '../../map/map';
import { Helmet } from 'react-helmet-async';
import { OfferType } from '../../../types';
import OfferList from '../../offer/offer-list';
import LocationsList from '../../locations/locations-list';

type MainPageProps = {
  hotelsNumber: number;
  offer: OfferType[];
  cities: string[];
  onCityClick: (value: string) => void;
  currentCity: string;
}

const MainScreen = ({hotelsNumber, offer, cities, onCityClick, currentCity}: MainPageProps): JSX.Element => (
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
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                  Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>
            <OfferList offer={offer} />
          </section>
          <div className="cities__right-section">
            <Map />
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default MainScreen;
