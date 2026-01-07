import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';

function NotFoundScreen() {
  return(
    <>
      <Helmet>
        <title>Страница не найдена</title>
      </Helmet>
      <h1>Страница не найдена</h1>
      <Link to={AppRoute.MAIN}>Вернуться на главную страницу</Link>
    </>
  );
}

export default NotFoundScreen;
