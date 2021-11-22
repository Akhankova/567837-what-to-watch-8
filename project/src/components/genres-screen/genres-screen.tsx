import React from 'react';
import { useSelector} from 'react-redux';
import { getGenre } from '../../store/films-data/selectors';

type GenresListProps = {
  onClick: (genre: string) => void,
  genre: string [];
}

function GenresScreen(props: GenresListProps): JSX.Element {
  const MIN_INDEX = 0;
  const MAX_INDEX = 9;
  const {genre, onClick} = props;
  const activeGenre = useSelector(getGenre);
  return (
    <ul className="catalog__genres-list">
      <li className={`catalog__genres-item ${'All genres' === activeGenre ? 'catalog__genres-item--active' : ''} `}>
        <a href="/" className="catalog__genres-link" onClick={(evt) => {evt.preventDefault(); onClick('All genres');}}>All genres</a>
      </li>
      {genre.slice(MIN_INDEX, MAX_INDEX).map((filmGenre:string) => (
        <li key={filmGenre} className={`catalog__genres-item ${filmGenre === activeGenre ? 'catalog__genres-item--active' : ''} `}>
          <a href='/' className= "catalog__genres-link" onClick={(evt) => {evt.preventDefault(); onClick(filmGenre);}}>{filmGenre}</a>
        </li>
      ))}
    </ul>
  );
}

export default React.memo(GenresScreen);
