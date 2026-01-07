import { Link } from 'react-router-dom';
import { PlaceOfferType } from '../../types';
import { AppRoute } from '../../const';


type CardProps = {
  placeOffer: PlaceOfferType;
  classNameCard: string;
  imageWidth: string;
  imageHeight: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const PremiumMark = (): JSX.Element => (
  <div className="place-card__mark">
    <span>Premium</span>
  </div>
);

function Card({
  placeOffer,
  classNameCard,
  imageWidth,
  imageHeight,
  onMouseEnter,
  onMouseLeave
}: CardProps): JSX.Element {

  const {title, previewImage, price, isFavorite, rating, type} = placeOffer;
  const favoriteClass = isFavorite
    ? 'place-card__bookmark-button place-card__bookmark-button--active button'
    : 'place-card__bookmark-button button';

  const CardStyle = {
    FOR_ARTICLE: `${classNameCard }__card place-card`,
    FOR_DIV: `${classNameCard }__image-wrapper place-card__image-wrapper`
  };

  return (
    <article
      className={CardStyle.FOR_ARTICLE}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isFavorite ? <PremiumMark /> : ''}

      <div className={CardStyle.FOR_DIV}>
        <a href="#">
          <img className="place-card__image" src={previewImage} width={imageWidth} height={imageHeight} alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={favoriteClass} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${(rating / 5) * 100}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>);
}

export default Card;
