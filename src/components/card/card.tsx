import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { OfferType } from '../../types';
import { AppRoute } from '../../const';
import { ratingInProcent } from '../../utils';


type CardProps = {
  offer: OfferType;
  classNameCard: string;
  imageWidth: string;
  imageHeight: string;
  onOfferHover?: (value: string) => void;
  onListItemHover: (listItemName: string) => void;
}

const PremiumMark = (): JSX.Element => (
  <div className="place-card__mark">
    <span>Premium</span>
  </div>
);

function Card({
  offer,
  classNameCard,
  imageWidth,
  imageHeight,
  onOfferHover,
  onListItemHover
}: CardProps): JSX.Element {

  const {title, previewImage, price, isFavorite, rating, type} = offer;
  const favoriteClass = isFavorite
    ? 'place-card__bookmark-button place-card__bookmark-button--active button'
    : 'place-card__bookmark-button button';
  const ratingStars = ratingInProcent(rating);
  const CardStyle = {
    FOR_ARTICLE: `${classNameCard }__card place-card`,
    FOR_DIV: `${classNameCard }__image-wrapper place-card__image-wrapper`
  };

  const handleCardMouseEnter = (id: string): void => {
    if (onOfferHover) {
      onOfferHover(id);
    }
  };

  const handleCardMouseLeave = (): void => {
    if (onOfferHover) {
      onOfferHover('');
    }
  };

  const handleListItemHover = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    onListItemHover(event.currentTarget.innerText);
  };

  return (
    <article
      className={CardStyle.FOR_ARTICLE}
      onMouseLeave={() => handleCardMouseLeave()}
      onMouseEnter={() => handleCardMouseEnter(offer.id)}
    >
      {isFavorite ? <PremiumMark /> : ''}

      <div className={CardStyle.FOR_DIV}>
        <Link to={AppRoute.OFFER}>
          <img className="place-card__image" src={previewImage} width={imageWidth} height={imageHeight} alt="Place image" />
        </Link>
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
            <span style={{width: ratingStars}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name" onMouseEnter={handleListItemHover}>{title}</h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>);
}

export default Card;
