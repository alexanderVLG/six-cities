import { useAppSelector } from '../../hooks/use-app-selector';
import { CITIES } from '../../const';

type LocationsProps = {
  onCityClick: (currentCityName: string) => void;
}

type LocationItemProps = {
  cityName: string;
  onCityClick: (currentCityName: string) => void;
}

const citiesName = CITIES.map((city) => city.name);

const LocationsItem = ({cityName, onCityClick }: LocationItemProps): JSX.Element => {
  const currentCityName = useAppSelector((state) => state.city.name);
  const classCityItem = cityName === currentCityName
    ? 'locations__item-link tabs__item tabs__item--active'
    : 'locations__item-link tabs__item';

  return (
    <li onClick={() => onCityClick(cityName)} className="locations__item">
      <a className={classCityItem} href="#">
        <span>{cityName}</span>
      </a>
    </li>
  );
};

const LocationsList = ({onCityClick}: LocationsProps): JSX.Element => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {citiesName.map((city) => <LocationsItem key={city} cityName={city} onCityClick={onCityClick} />)}
      </ul>
    </section>
  </div>
);

export default LocationsList;
