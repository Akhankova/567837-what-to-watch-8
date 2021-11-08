import { useSelector} from 'react-redux';
import { getGenre } from '../../store/films-data/selectors';

type GenresListProps = {
  onClick: (genre: string) => void,
  genre: string [];
}

function GenresScreen(props: GenresListProps): JSX.Element {
  const {genre, onClick} = props;
  const activGenre = useSelector(getGenre);
  return (
    <ul className="catalog__genres-list">
      <li className={`catalog__genres-item ${'All genres' === activGenre ? 'catalog__genres-item--active' : ''} `}>
        <a href="/" className="catalog__genres-link" onClick={(evt) => {evt.preventDefault(); onClick('All genres');}}>All genres</a>
      </li>
      {genre.map((filmGenre:string) => {
        const keyValue = filmGenre;
        return (
          <li key={keyValue} className={`catalog__genres-item ${filmGenre === activGenre ? 'catalog__genres-item--active' : ''} `}>
            <a href='/' className= "catalog__genres-link" onClick={(evt) => {evt.preventDefault(); onClick(filmGenre);}}>{filmGenre}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default GenresScreen;
