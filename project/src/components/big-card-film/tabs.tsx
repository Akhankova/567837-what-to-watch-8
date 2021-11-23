type TabsProps = {
  onClick: (tab: string) => void,
  activeTab: string;
}

export function FilmCardTabs(props: TabsProps): JSX.Element {
  const { onClick, activeTab } = props;
  const tabs = ['Overview', 'Details', 'Reviews'];

  return (
    <ul className="film-nav__list">
      {tabs.map((tab) => (
        <li key= {tab} className={`film-nav__item  ${ activeTab === tab? 'film-nav__item--active' : ''} `}>
          <a href="/" className="film-nav__link" onClick={(evt) => {evt.preventDefault(); onClick(tab);}} >{tab}</a>
        </li>
      ))}
    </ul>
  );
}

export default FilmCardTabs;
