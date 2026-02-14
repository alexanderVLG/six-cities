import { Helmet } from 'react-helmet-async';
import {nanoid} from '@reduxjs/toolkit';
import { OfferType } from '../../types';
import Footer from '../../components/layout/footer';
import Header from '../../components/layout/header';
import Card from '../../components/card/card';
import { CITIES } from '../../const';

type FavoritesProps = {
  offers: OfferType[];
}

type FavoritesItemProps = {
  cityOffers: OfferType[];
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
              offer={offer}
              classNameCard='favorites'
              imageWidth='150'
              imageHeight='110'
            />
          ))
      }
    </div>
  </li>
);

const FavoriteList = ({offers}: FavoritesProps): JSX.Element => {

  const filteredByCities = CITIES.map((city) => offers.filter((offer) => offer && offer.city.name === city && offer.isFavorite));
  const offersCities = filteredByCities.filter((list) => list.length > 0);

  return (
    <ul className="favorites__list">
      {offersCities.map((cityOffers) => <FavoritesItem key={nanoid()} cityOffers={cityOffers} />)}
    </ul>
  );
};


function FavoritesScreen({offers}: FavoritesProps):JSX.Element {
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
              <FavoriteList offers={offers} />
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesScreen;
