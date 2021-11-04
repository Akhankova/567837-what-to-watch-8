/* eslint-disable no-console */
import React, {useRef, useState} from 'react';
import {Comment} from '../../types/small-film-card';
import {  useHistory, useParams } from 'react-router-dom';
//import axios from 'axios';
import {APIRoute} from '../../types/api';
//import { useEffect } from 'react';
import {CardComments} from '../../types/small-film-card';
import { api } from '../../index';
//import {useDispatch} from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';

const BACKEND_URL = 'https://8.react.pages.academy/wtw';
type CommentServer = {
  rating: number,
  comment: string,
};

function FormNewComment(): JSX.Element {
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const filmId = useParams<{id?: string}>();
  const currentFilmId = filmId.id;
  const numberCurrentFilmId = currentFilmId;
  const [ reviews, setReviews ] = useState<CardComments>([]);
  //const dispatchAction = useDispatch();
  const [ error, setError ] = useState('');
  const [ commentValid, setCommentValid ] = useState(false);
  const [ ratingValid, setRatingValid ] = useState(false);
  const [ submit, setSubmit ] = useState(false);

  const postComment = async (comment: CommentServer): Promise<void> => {
    await api.post<Comment[]>(`${BACKEND_URL}${APIRoute.Comments}/${numberCurrentFilmId}`, comment);
  };
  console.log(reviews);
  /*useEffect(() => {
    axios.get(`${BACKEND_URL}${APIRoute.Comments}/${numberCurrentFilmId}`)
      .then((response) => setReviews(response.data));

  }, [numberCurrentFilmId]);*/
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
  /*const [commentNew, setCommentNew] = useState<CommentServer>({

    rating: 0,
    comment: '',

  });*/
  const getValidForComment = (textlength: number) => {
    if (textlength < 50 || textlength > 400) {
      setError('Текст отзыва должен быть не меньше 50 и не больше 400 символов');
      setCommentValid(false);
    } else {
      setCommentValid(true);
      console.log(error);
    }

  };
  const getValidForRating = (rating: number) => {
    if (rating === 0) {
      setError('Выставите оценку фильму от 1 до 10');
      setRatingValid(false);
    } else {
      setRatingValid(true);
    }

  };
  useEffect(() => {
    axios.get(`${BACKEND_URL}${APIRoute.Comments}/${numberCurrentFilmId}`)
      .then((response) => setReviews(response.data));

  }, [numberCurrentFilmId]);

  const getCommentText = (event:React.ChangeEvent<HTMLTextAreaElement>) => {

    setCommentNew({
      ...commentNew,
      comment: event.target.value,
    });
    getValidForComment(commentNew.comment.length);
  };
  const getRating = (event:React.ChangeEvent<HTMLInputElement>) => {
    setCommentNew({
      ...commentNew,
      rating: Number(event.target.value),
    });
    getValidForRating(Number(event.target.value));
  };
  const history = useHistory();
  const onAddCommentHandler = (evt: any) => {
    evt.preventDefault();
    const {comment, rating} = commentNew;
    postComment({comment, rating})
      .then(() => {
        history.push(`/films/${numberCurrentFilmId}/reviews`);
      })
      .finally(() => {
        setSubmit(false);
      });
    setReviews([...reviews, commentNew]);
  };
  const validRating = ratingValid === false ? <div style={{color:'black'}}>Выставите оценку фильму от 1 до 10</div> : ' ';
  const validComment = commentValid === false ? <div style={{color:'red', border: '3px solid black'}}>Текст отзыва должен быть не меньше 50 и не больше 400 символов</div> : ' ';
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
          {commentNew.comment.length !== 0 ? validComment : ' '}
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"value={commentNew.comment} onChange={getCommentText} ref={textRef}>
            {commentNew.comment}
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={!commentValid || !ratingValid || submit}>Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default FormNewComment;
