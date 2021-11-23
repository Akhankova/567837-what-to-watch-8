import React from 'react';
import { useSelector} from 'react-redux';
import { getGenre } from '../../store/films-data/selectors';
import { GenresLengthValue } from '../../const';

type GenresListProps = {
  onClick: (genre: string) => void,
  genre: string [];
}

function GenresScreen(props: GenresListProps): JSX.Element {
  const {genre, onClick} = props;
  const activeGenre = useSelector(getGenre);
  return (
    <ul className="catalog__genres-list">
      <li className={`catalog__genres-item ${'All genres' === activeGenre ? 'catalog__genres-item--active' : ''} `}>
        <a href="/" className="catalog__genres-link" onClick={(evt) => {evt.preventDefault(); onClick('All genres');}}>All genres</a>
      </li>
      {genre.slice(GenresLengthValue.MinValue, GenresLengthValue.MaxValue).map((filmGenre:string) => (
        <li key={filmGenre} className={`catalog__genres-item ${filmGenre === activeGenre ? 'catalog__genres-item--active' : ''} `}>
          <a href='/' className= "catalog__genres-link" onClick={(evt) => {evt.preventDefault(); onClick(filmGenre);}}>{filmGenre}</a>
        </li>
      ))}
    </ul>
  );
}

export default React.memo(GenresScreen);
