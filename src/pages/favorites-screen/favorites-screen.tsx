import { Helmet } from 'react-helmet-async';
import {nanoid} from '@reduxjs/toolkit';
import { OffersListType } from '../../types';
import Footer from '../../components/layout/footer';
import Header from '../../components/layout/header';
import Card from '../../components/card/card';
import { CITIES } from '../../const';

type FavoritesProps = {
  offersList: OffersListType[];
}

const FavoritesItem = ({offersList}: FavoritesProps): JSX.Element => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{offersList[0].city.name}</span>
        </a>
      </div>
    </div>
    <div className="favorites__places">
      {
        offersList.map((offer) =>
          (
            <Card
              key={offer.id}
              offer={offer}
              classNameCard='favorites'
              imageWidth='150'
              imageHeight='110'
              onListItemHover={() => {}}
            />
          ))
      }
    </div>
  </li>
);

const FavoriteList = ({offersList}: FavoritesProps): JSX.Element => {

  const filteredByCities = CITIES.map((city) => offersList.filter((offer) => offer && offer.city.name === city && offer.isFavorite));
  const offersCities = filteredByCities.filter((list) => list.length > 0);

  return (
    <ul className="favorites__list">
      {offersCities.map((cityOffers) => <FavoritesItem key={nanoid()} offersList={cityOffers} />)}
    </ul>
  );
};


function FavoritesScreen({offersList}: FavoritesProps):JSX.Element {
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
              <FavoriteList offersList={offersList} />
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesScreen;
