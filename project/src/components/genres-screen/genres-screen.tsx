/* eslint-disable no-console */
import { SyntheticEvent } from 'react';
import {setGenre} from '../../store/action';
//import {SmallCards} from '../../types/small-film-card';
import {Dispatch} from 'redux';
import {GenreAction} from '../../types/action';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';


const uniqueItems = (items: string[]) => [...new Set(items)];

type GenresListProps = {
  //movies: SmallCards,
  //genre: string;
}

const mapStateToProps = (state: State) => ({
  movies: state.movies,
  //genre: state.genre,
});

const mapDispatchToProps = (dispatch: Dispatch<GenreAction>) => ({
  onClickHandler(genre: string) {
    dispatch(setGenre(genre));
  },
});


const connector = connect(mapStateToProps, mapDispatchToProps);

type MainProps = ConnectedProps<typeof connector>;
type ConnectedComponentProps = MainProps & GenresListProps;

function GenresScreen(props: ConnectedComponentProps): JSX.Element {
  const {movies, onClickHandler} = props;
  const onGenreClickHandler = (evt: SyntheticEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    const cardsGenre = evt.currentTarget.innerText;
    //setGenre(cardsGenre);
    onClickHandler(cardsGenre);
  };
  const genres: string[] = [];
  movies.filter((element) => genres.push(element.genre));
  const genresUning: string[]  = uniqueItems(genres);

  return (
    <ul className="catalog__genres-list">
      <li className="catalog__genres-item catalog__genres-item--active">
        <a href="/" className="catalog__genres-link" onClick={onGenreClickHandler}>All genres</a>
      </li>
      {genresUning.map((filmGenre, idGenre) => {
        const keyValue = `${idGenre}-${filmGenre}`;
        return (
          <li key={keyValue} className='catalog__genres-item'>
            <a href="/" className="catalog__genres-link" onClick={onGenreClickHandler}>{filmGenre}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default connector(GenresScreen);
