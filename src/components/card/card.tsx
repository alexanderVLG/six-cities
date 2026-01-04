import { Link } from 'react-router-dom';
import { OfferType, PlaceOfferType } from '../../types';
import { AppRoute } from '../../const';

type CardVariantProps = 'cities' | 'favorites';

type CardProps = {
  data: OfferType | PlaceOfferType;
  variant?: CardVariantProps;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isActive?: boolean;
}

function Card({
  data,
  variant,
  onMouseEnter,
  onMouseLeave,
  isActive
}: CardProps): JSX.Element {

  const getContainerClasses = () => {
    switch (variant) {
      case 'favorites':
        return 'favorites__card place-card';
      case 'cities':
      default:
        return `cities__card place-card ${isActive ? 'active' : null}`;
    }
  };

  const getImageWrapperClasses = () => {
    switch (variant) {
      case 'favorites':
        return 'favorites__image-wrapper place-card__image-wrapper';
      case 'cities':
      default:
        return 'cities__image-wrapper place-card__image-wrapper';
    }
  };

  const getInfoClasses = () => {
    if (variant === 'favorites') {
      return 'favorites__card-info place-card__info';
    }
    return 'place-card__info';
  };

  const getImageSize = () => {
    switch (variant) {
      case 'favorites':
        return { width: 150, height: 110 };
      default:
        return { width: 260, height: 200 };
    }
  };

  const {width, height} = getImageSize();

  return (
    <article
      key={data.id}
      className={getContainerClasses()}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {data.isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}
      <div className={getImageWrapperClasses()}>
        <a href="#">
          <img className="place-card__image" src={data.previewImage} width={width} height={height} alt="Place image" />
        </a>
      </div>
      <div className={getInfoClasses()}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{data.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${
            data.isFavorite ? 'place-card__bookmark-button--active' : ''
          }`}
          type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${(data.rating / 5) * 100}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer}>{data.title}</Link>
        </h2>
        <p className="place-card__type">{data.type}</p>
      </div>
    </article>);
}

export default Card;
