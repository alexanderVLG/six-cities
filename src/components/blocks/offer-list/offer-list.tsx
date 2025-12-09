import { useState } from 'react';
import Card from '../../card/card';
import { Offer } from '../../../types/offer';

type OfferListProps = {
  offer: Offer[];
}

function OfferList({offer}: OfferListProps): JSX.Element {
  const[activeCardId, setActiveCardId] = useState<string | null>(null);

  const handleMouseEnter = (id: string) => {
    setActiveCardId(id);
  };

  const handleMouseLeave = () => {
    setActiveCardId(null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offer.map((item) => (
          <Card
            key={item.id}
            data={item}
            variant="cities"
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
            isActive={activeCardId === item.id}
          />
        ))
      }
    </div>
  );
}

export default OfferList;
