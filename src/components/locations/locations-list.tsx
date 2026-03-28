
type LocationsProps = {
  cities: string[];
  onCityClick: (currentCityName: object) => void;
  currentCityName: object;
}

type LocationItemProps = {
  city: string;
  onCityClick: (currentCityName: object) => void;
  currentCityName: object;
}

const LocationsItem = ({city, onCityClick, currentCityName}: LocationItemProps): JSX.Element => {

  const classCityItem = city === currentCityName
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

const LocationsList = ({cities, onCityClick, currentCityName}: LocationsProps): JSX.Element => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => <LocationsItem key={city} city={city} onCityClick={onCityClick} currentCityName={currentCityName}/>)}
      </ul>
    </section>
  </div>
);

export default LocationsList;
