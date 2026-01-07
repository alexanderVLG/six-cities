import { Helmet } from 'react-helmet-async';
import {nanoid} from '@reduxjs/toolkit';
import { PlaceOfferType } from '../../../types';
import Footer from '../../layout/footer';
import Header from '../../layout/header';
import Card from '../../card/card';
import { CITIES } from '../../../const';

type FavoritesProps = {
  placeOffers: PlaceOfferType[];
}

type FavoritesItemProps = {
  cityOffers: PlaceOfferType[];
}

const FavoritesItem = ({cityOffers}: FavoritesItemProps): JSX.Element => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{cityOffers[0].city.name}</span>
        </a>
      </div>
    </div>
    <div className="favorites__places">
      {
        cityOffers.map((offer) =>
          (
            <Card
              key={offer.id}
              placeOffer={offer}
              classNameCard='favorites'
              imageWidth='150'
              imageHeight='110'
            />
          ))
      }
    </div>
  </li>
);

const FavoriteList = ({placeOffers}: FavoritesProps): JSX.Element => {

  const filteredByCities = CITIES.map((city) => placeOffers.filter((offer) => offer && offer.city.name === city && offer.isFavorite));
  const offersCities = filteredByCities.filter((list) => list.length > 0);

  return (
    <ul className="favorites__list">
      {offersCities.map((cityOffers) => <FavoritesItem key={nanoid()} cityOffers={cityOffers} />)}
    </ul>
  );
};


function FavoritesScreen({placeOffers}: FavoritesProps):JSX.Element {
  return(
    <div className="page">
      <Helmet>
        <title>6 городов | Избранное</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <FavoriteList placeOffers={placeOffers} />
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesScreen;
