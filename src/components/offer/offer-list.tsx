import Card from '../card/card';
import { OffersListType } from '../../types';

type OfferListProps = {
  offersList: OffersListType[];
  onListItemHover: (listItemName: string) => void;
}

function OfferList({offersList, onListItemHover}: OfferListProps): JSX.Element {


  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offersList.map((item) => (
          <Card
            key={item.id}
            offer={item}
            classNameCard="cities"
            imageWidth='150'
            imageHeight='110'
            onListItemHover={onListItemHover}
          />
        ))
      }
    </div>
  );
}

export default OfferList;
