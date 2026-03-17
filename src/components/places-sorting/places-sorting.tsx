import { useAppSelector } from '../../hooks/use-app-selector';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { changeToggle, setSortingType } from '../../store/action';

type OptionsProps = {
  placesOptions: string[];
  handleSortingOffers: (value: string) => void;
}

type OptionProps = {
  option: string;
  handleSortingOffers: (value: string) => void;
  isActive: boolean;
  onClose: () => void;
}

const PlacesOptions = ({ option, handleSortingOffers, isActive, onClose }: OptionProps): JSX.Element => {
  const optionClass = isActive
    ? 'places__option places__option--active'
    : 'places__option';

  const onSortingItemClick = () => {
    handleSortingOffers(option);
    onClose();
  };

  return (
    <li className={optionClass} tabIndex={0} onClick={onSortingItemClick}>
      {option}
    </li>
  );
};

const PlacesSorting = ({ placesOptions, handleSortingOffers }: OptionsProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const toggle = useAppSelector((state) => state.toggle);

  const currentSortingType = useAppSelector((state) => state.sortingType) || 'Popular';

  const onSortingListClick = () => {
    dispatch(changeToggle(!toggle));
  };

  const placesListClass = toggle
    ? 'places__options places__options--custom places__options--opened'
    : 'places__options places__options--custom';

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>

      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={onSortingListClick}
      >
        {currentSortingType}
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
            isActive={option === currentSortingType} // Подсветка активного пункта
            onClose={() => dispatch(changeToggle(false))} // Закрытие списка при клике
          />
        ))}
      </ul>
    </form>
  );
};

export default PlacesSorting;
