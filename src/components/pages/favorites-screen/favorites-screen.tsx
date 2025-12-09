import { Helmet } from 'react-helmet-async';
import Footer from '../../layout/footer';
import Header from '../../layout/header';
import { Favorite } from '../../../types/favorite';
import Card from '../../card/card';

type FavoriteProps = {
  favorite: Favorite[];
}

function FavoritesScreen({favorite}: FavoriteProps):JSX.Element {
  return(
    <div className="page">
      <Helmet>
        <title>Страница избранных отелей</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {
                    favorite.map((item) => (
                      <Card
                        key={item.id}
                        data={item}
                        variant='favorites'
                      />
                    ))
                  }
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {
                    favorite.map((item) => (
                      <Card
                        key={item.id}
                        data={item}
                        variant='favorites'
                      />
                    ))
                  }
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesScreen;
