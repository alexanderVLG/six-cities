import { useAppSelector } from '../../hooks/use-app-selector';
import { CityType } from '../../types/types';

type LocationsProps = {
  cities: string[];
  onCityClick: (currentCityName: CityType) => void;
}

type LocationItemProps = {
  city: string;
  onCityClick: (currentCityName: CityType) => void;
}

const LocationsItem = ({city, onCityClick}: LocationItemProps): JSX.Element => {
  const currentCityName = useAppSelector((state) => state.city);
  const classCityItem = city === currentCityName.name;
    ? 'locations__item-link tabs__item tabs__item--active'
    : 'locations__item-link tabs__item';

  return (
    <li onClick={() => onCityClick(city)} className="locations__item">
      <a className={classCityItem} href="#">
        <span>{city}</span>
      </a>
    </li>
  );
};

const LocationsList = ({cities, onCityClick}: LocationsProps): JSX.Element => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => <LocationsItem key={city} city={city} onCityClick={onCityClick} currentCityName={currentCityName}/>)}
      </ul>
    </section>
  </div>
);

export default LocationsList;
