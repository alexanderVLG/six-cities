import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function NotFoundScreen() {
  return(
    <>
      <Helmet>
        <title>Страница не найдена</title>
      </Helmet>
      <h1>Страница не найдена</h1>
      <Link to="/">Вернуться на главную страницу</Link>
    </>
  );
}

export default NotFoundScreen;
