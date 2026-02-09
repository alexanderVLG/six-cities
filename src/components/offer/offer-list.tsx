import Card from '../card/card';
import { PlaceOfferType } from '../../types';

type OfferListProps = {
  placeOffer: PlaceOfferType[];
  onListItemHover: (listItemName: string) => void;
}

function OfferList({placeOffer, onListItemHover}: OfferListProps): JSX.Element {


  return (
    <div className="cities__places-list places__list tabs__content">
      {
        placeOffer.map((item) => (
          <Card
            key={item.id}
            placeOffer={item}
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
