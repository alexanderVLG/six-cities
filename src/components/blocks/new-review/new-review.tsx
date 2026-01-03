import { ChangeEvent, useState } from 'react';

const mockStars = [
  {
    value: 5,
    id: '5-stars',
    type: 'radio',
    title: 'perfect'
  },
  {
    value: 4,
    id: '4-stars',
    type: 'radio',
    title: 'good'
  },
  {
    value: 3,
    id: '3-stars',
    type: 'radio',
    title: 'not bad'
  },
  {
    value: 2,
    id: '2-stars',
    type: 'radio',
    title: 'badly'
  },
  {
    value: 1,
    id: '1-star',
    type: 'radio',
    title: 'terribly'
  }
];

function NewReview () {
  const[rating, setRating] = useState<number | null>(null);
  const[review, setReview] = useState<string>('');

  const handleOnClick = (value: number) => {
    setRating(value);
  };

  const handleTextAreaValue = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setReview(event.target.value);
  };

  const isButtonDisabled: boolean = review.trim().length < 50;

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {mockStars.map((item) => (
          <div key={item.id}>
            <input className="form__rating-input visually-hidden" name="rating" value={item.value} id={item.id} type={item.type} />
            <label
              htmlFor={item.id}
              className="reviews__rating-label form__rating-label"
              title={item.title}
              onClick={() => handleOnClick(item.value)}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </div>
        ))}
      </div>
      <textarea
        value={review}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleTextAreaValue}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">{rating}</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isButtonDisabled}
        >Submit
        </button>
      </div>
    </form>
  );
}

export default NewReview;
