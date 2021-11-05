import React, { useState, useEffect} from 'react';
import {Comment, CommentServer} from '../../types/small-film-card';
import {  useHistory, useParams } from 'react-router-dom';
import {APIRoute} from '../../types/api';
import { api } from '../../index';
import { BACKEND_URL } from '../../const';

function FormNewComment(): JSX.Element {
  const numberCurrentFilmId = useParams<{id?: string}>().id;
  const [ commentValid, setCommentValid ] = useState(false);
  const [ ratingValid, setRatingValid ] = useState(false);

  const postComment = async (comment: CommentServer): Promise<void> => {
    await api.post<Comment[]>(`${BACKEND_URL}${APIRoute.Comments}/${numberCurrentFilmId}`, comment);
  };

  const [commentNew, setCommentNew] = useState<Comment>({
    id: 22,
    user: {
      id: 1,
      name: 'Alex',
    },
    rating: 0,
    comment: '',
    date : '22.10.2021',

  });

  const getValidForComment = (textlength: number) => {
    if (textlength < 50 || textlength > 400) {
      setCommentValid(false);
    } else {
      setCommentValid(true);
    }

  };
  const getValidForRating = (rating: number) => {
    if (rating === 0) {
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
    getValidForRating(Number(event.target.value));
  };

  useEffect(() => {
    getValidForRating(commentNew.rating);
  }, [commentNew.rating]);

  const history = useHistory();
  const onAddCommentHandler = (evt: any) => {
    evt.preventDefault();
    const {comment, rating} = commentNew;
    postComment({comment, rating})
      .then(() => {
        history.push(`/films/${numberCurrentFilmId}/reviews`);
      })
      .catch(() => history.push('/404'));
    //.catch(() => {toast.error('Не удалось отправить комментарий');});
  };
  const validRating = !ratingValid ? <div style={{color:'black'}}>Выставите оценку фильму от 1 до 10</div> : ' ';
  const validComment = !commentValid ? <div style={{color:'red', border: '3px solid black'}}>Текст отзыва должен быть не меньше 50 и не больше 400 символов</div> : ' ';
  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={onAddCommentHandler}>
        {validRating}
        <div className="rating">
          <div className="rating__stars">{commentNew.rating}
            <input className="rating__input" id="star-10" type="radio" name="rating" value={10} onChange={getRating}/>
            <label className="rating__label" htmlFor="star-10">Rating 10</label>

            <input className="rating__input" id="star-9" type="radio" name="rating" value={9} onChange={getRating}/>
            <label className="rating__label" htmlFor="star-9">Rating 9</label>

            <input className="rating__input" id="star-8" type="radio" name="rating" value={8} onChange={getRating}/>
            <label className="rating__label" htmlFor="star-8">Rating 8</label>

            <input className="rating__input" id="star-7" type="radio" name="rating" value={7} onChange={getRating}/>
            <label className="rating__label" htmlFor="star-7">Rating 7</label>

            <input className="rating__input" id="star-6" type="radio" name="rating" value={6} onChange={getRating}/>
            <label className="rating__label" htmlFor="star-6">Rating 6</label>

            <input className="rating__input" id="star-5" type="radio" name="rating" value={5} onChange={getRating}/>
            <label className="rating__label" htmlFor="star-5">Rating 5</label>

            <input className="rating__input" id="star-4" type="radio" name="rating" value={4} onChange={getRating}/>
            <label className="rating__label" htmlFor="star-4">Rating 4</label>

            <input className="rating__input" id="star-3" type="radio" name="rating" value={3} onChange={getRating}/>
            <label className="rating__label" htmlFor="star-3">Rating 3</label>

            <input className="rating__input" id="star-2" type="radio" name="rating" value={2} onChange={getRating}/>
            <label className="rating__label" htmlFor="star-2">Rating 2</label>

            <input className="rating__input" id="star-1" type="radio" name="rating" value={1} onChange={getRating}/>
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
