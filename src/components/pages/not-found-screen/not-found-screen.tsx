import { Link } from 'react-router-dom';

function NotFoundScreen() {
  return(
    <>
      <h1>Страница не найдена</h1>
      <Link to="/">Вернуться на главную страницу</Link>
    </>
  );
}

export default NotFoundScreen;
