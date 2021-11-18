import React, { useState, useEffect} from 'react';
import {Comment, CommentServer} from '../../types/small-film-card';
import {  useHistory, useParams } from 'react-router-dom';
import {APIRoute} from '../../types/api';
import { api } from '../../index';
import { BACKEND_URL, ERROR_ROUTE, RATING_MAX, RATING_MIN, RATING_EIGHT, RATING_FIVE, RATING_FOUR, RATING_NINE, RATING_SEVEN, RATING_SIX, RATING_THREE, RATING_TWO } from '../../const';

function FormNewComment(): JSX.Element {
  const MAX_LENGTH_COMMENT = 400;
  const MIN_LENGTH_COMMENT = 50;
  const MIN_VALUE_RATING = 0;

  const numberCurrentFilmId = useParams<{id?: string}>().id;
  const [ commentValid, setCommentValid ] = useState(false);
  const [ ratingValid, setRatingValid ] = useState(false);
  const history = useHistory();

  const postComment = async (comment: CommentServer): Promise<void> => {
    await api.post<Comment[]>(`${BACKEND_URL}${APIRoute.Comments}/${numberCurrentFilmId}`, comment);
  };

  const [commentNew, setCommentNew] = useState<CommentServer>({
    rating: MIN_VALUE_RATING,
    comment: '',
  });

  const getValidForComment = (textlength: number) => {
    if (textlength < MIN_LENGTH_COMMENT || textlength > MAX_LENGTH_COMMENT) {
      setCommentValid(false);
    } else {
      setCommentValid(true);
    }
  };

  const getValidForRating = (rating: number) => {
    if (!rating) {
      setRatingValid(false);
    } else {
      setRatingValid(true);
    }
  };

  const getCommentText = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentNew({
      ...commentNew,
      comment: event.target.value,
    });
  };

  useEffect(() => {
    getValidForComment(commentNew.comment.length);
  }, [commentNew.comment]);

  const getRating = (event:React.ChangeEvent<HTMLInputElement>) => {
    setCommentNew({
      ...commentNew,
      rating: Number(event.target.value),
    });
  };

  useEffect(() => {
    getValidForRating(commentNew.rating);
  }, [commentNew.rating]);

  const onAddCommentHandler = (evt: { preventDefault: () => void; }) => {
    evt.preventDefault();
    const {comment, rating} = commentNew;
    postComment({comment, rating})
      .then(() => {
        history.push(`/films/${numberCurrentFilmId}`);
      })
      .catch(() => history.push(`/${ERROR_ROUTE}`));
  };

  const validRating = !ratingValid ? <div style={{color:'black'}}>Выставите оценку фильму от 1 до 10</div> : ' ';
  const validComment = !commentValid ? <div style={{color:'red', border: '3px solid black'}}>Текст отзыва должен быть не меньше 50 и не больше 400 символов</div> : ' ';
  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={onAddCommentHandler}>
        {validRating}
        <div className="rating">
          <div className="rating__stars">{commentNew.rating}
            <input className="rating__input" id="star-10" type="radio" name="rating" value={RATING_MAX} onChange={getRating}/>
            <label className="rating__label" htmlFor="star-10">Rating 10</label>

            <input className="rating__input" id="star-9" type="radio" name="rating" value={RATING_NINE} onChange={getRating}/>
            <label className="rating__label" htmlFor="star-9">Rating 9</label>

            <input className="rating__input" id="star-8" type="radio" name="rating" value={RATING_EIGHT} onChange={getRating}/>
            <label className="rating__label" htmlFor="star-8">Rating 8</label>

            <input className="rating__input" id="star-7" type="radio" name="rating" value={RATING_SEVEN} onChange={getRating}/>
            <label className="rating__label" htmlFor="star-7">Rating 7</label>

            <input className="rating__input" id="star-6" type="radio" name="rating" value={RATING_SIX} onChange={getRating}/>
            <label className="rating__label" htmlFor="star-6">Rating 6</label>

            <input className="rating__input" id="star-5" type="radio" name="rating" value={RATING_FIVE} onChange={getRating}/>
            <label className="rating__label" htmlFor="star-5">Rating 5</label>

            <input className="rating__input" id="star-4" type="radio" name="rating" value={RATING_FOUR} onChange={getRating}/>
            <label className="rating__label" htmlFor="star-4">Rating 4</label>

            <input className="rating__input" id="star-3" type="radio" name="rating" value={RATING_THREE} onChange={getRating}/>
            <label className="rating__label" htmlFor="star-3">Rating 3</label>

            <input className="rating__input" id="star-2" type="radio" name="rating" value={RATING_TWO} onChange={getRating}/>
            <label className="rating__label" htmlFor="star-2">Rating 2</label>

            <input className="rating__input" id="star-1" type="radio" name="rating" value={RATING_MIN} onChange={getRating}/>
            <label className="rating__label" htmlFor="star-1">Rating 1</label>
          </div>
        </div>

        <div className="add-review__text">
          {commentNew.comment.length ? validComment : ' '}
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"value={commentNew.comment} onChange={getCommentText}>
            {commentNew.comment}
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={!commentValid || !ratingValid}>Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default FormNewComment;
