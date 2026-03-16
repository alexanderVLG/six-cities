import { useAppSelector } from '../../hooks/use-app-selector';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { changeToggle } from '../../store/action';
type OptionsProps = {
  placesOptions: string[];
  handleSortingOffers: (value: string) => void;
}

type OptionProps = {
  option: string;
  handleSortingOffers: (value: string) => void;
}

const PlacesOptions = ({option, handleSortingOffers}: OptionProps): JSX.Element => {
  const optionClass = option === 'Popular'
    ? 'places__option places__option--active'
    : 'places__option';

  const onSortingItemClick = (value: string) => {
    handleSortingOffers(value);
  };
  return(
    <li className={optionClass} tabIndex={0} onClick={() => onSortingItemClick(option)}>{option}</li>
  );
};


const PlacesSorting = ({placesOptions, handleSortingOffers}: OptionsProps):JSX.Element => {
  const toggle = useAppSelector((state) => state.toggle);
  const dispatch = useAppDispatch();
  const onSortingListClick = (value: boolean) => {
    dispatch(changeToggle(value));
  };
  const placesListClass = toggle
    ? 'places__options places__options--custom places__options--opened'
    : 'places__options places__options--custom';
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => onSortingListClick(!toggle)}>
                  Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={placesListClass}>
        {placesOptions.map((option) => (
          <PlacesOptions
            key={option}
            option={option}
            handleSortingOffers={handleSortingOffers}
          />
        ))}
      </ul>
    </form>
  );
};

export default PlacesSorting;
