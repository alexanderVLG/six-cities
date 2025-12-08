import Card from '../../card/card';
import { Offer } from '../../../types/offer';

type OfferListProps = {
  offer: Offer[];
}

function OfferList({offer}: OfferListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offer.map((item) => (
          <Card key={item.id} offer={item}/>
        ))
      }
    </div>
  );
}

export default OfferList;
