function CardFilmScreen(): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src="img/war-of-the-worlds.jpg" alt="War of the Worlds" width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">War of the Worlds</a>
      </h3>
    </article>
  );
}

export default CardFilmScreen;
