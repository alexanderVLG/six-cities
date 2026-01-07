import Card from '../card/card';
import { OfferType } from '../../types';

type OfferListProps = {
  offer: OfferType[];
}

function OfferList({offer}: OfferListProps): JSX.Element {


  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offer.map((item) => (
          <Card
            key={item.id}
            placeOffer={item}
            classNameCard="cities"
            imageWidth='150'
            imageHeight='110'
          />
        ))
      }
    </div>
  );
}

export default OfferList;
