import NewReview from '../new-review/new-review';
import { ReviewType } from '../../../types';
import { formatDate } from '../../../utils';

type ReviewProps = {
  reviews: ReviewType[];
}

function Reviews({reviews}: ReviewProps): JSX.Element {
  const amountReview: number = reviews.length;

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{amountReview}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <li key={review.id} className="reviews__item">
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img
                  className="reviews__avatar user__avatar"
                  src={review.user.avatarUrl}
                  width="54"
                  height="54"
                  alt={review.user.name}
                />
              </div>
              <span className="reviews__user-name">
                {review.user.name}
              </span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{width: `${(review.rating / 5) * 100}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">
                {review.comment}
              </p>
              <time className="reviews__time" dateTime={review.date}>{formatDate(review.date)}</time>
            </div>
          </li>
        ))}
      </ul>
      <NewReview />
    </section>
  );
}
export default Reviews;
