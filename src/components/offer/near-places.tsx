import { OffersListType } from '../../types';
import Card from '../card/card';

type NearPlacesProps = {
  offersList: OffersListType[];
}

const NearPlaces = ({offersList}: NearPlacesProps):JSX.Element => (
  <section className="near-places places">
    <h2 className="near-places__title">Other places in the neighbourhood</h2>
    <div className="near-places__list places__list">
      {offersList.slice(0, 3).map((offer) =>
        (
          <Card
            key={offer.id}
            offer={offer}
            classNameCard={'near-places'}
            imageWidth='260'
            imageHeight='200'
            onListItemHover={() => {}}
          />))}
    </div>
  </section>
);

export default NearPlaces;
