type OptionsProps = {
  placesOptions: string[];
  placesListClass: string;
  toggle: boolean;
  onSortingClick: (value: boolean) => void;
}

type OptionProps = {
  option: string;
}

const PlacesOptions = ({option}: OptionProps): JSX.Element => {
  const optionClass = option === 'Popular'
    ? 'places__option places__option--active'
    : 'places__option';

  return(
    <li className={optionClass} tabIndex={0}>{option}</li>
  );
};


const PlacesSorting = ({placesOptions, placesListClass, toggle, onSortingClick}: OptionsProps):JSX.Element => {

  placesListClass = toggle
    ? 'places__options places__options--custom places__options--opened'
    : 'places__options places__options--custom';
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => onSortingClick(!toggle)}>
                  Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={placesListClass}>
        {placesOptions.map((option) => <PlacesOptions key={option} option={option} />)}
      </ul>
    </form>
  );
};

export default PlacesSorting;
