import React from 'react';

type TabsProps = {
  onClick: (tab: string) => void,
  activTab: string;
}

export function FilmCardTabs(props: TabsProps): JSX.Element {
  const { onClick, activTab } = props;
  const tabs = ['Overview', 'Details', 'Reviews'];

  return (

    <ul className="film-nav__list">
      {tabs.map((tab) => {
        const keyValue = tab;
        return (
          <li key= {keyValue} className={`film-nav__item  ${ activTab === tab? 'film-nav__item--active' : ''} `} onClick={() => onClick(tab)}>
            <p className="film-nav__link">{tab}</p>
          </li>
        );
      })}
    </ul>


  );
}

export default FilmCardTabs;
