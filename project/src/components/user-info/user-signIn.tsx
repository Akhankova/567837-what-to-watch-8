import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../../store/api-actions';
import { Link, useHistory } from 'react-router-dom';
import { AppRoute } from '../../const';
import { getUser } from '../../store/user-data/selectors';

function UserLoggedIn(): JSX.Element {
  const history = useHistory();
  const dispatch = useDispatch();
  const avatar = useSelector(getUser);

  const handleLogoutButtonClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    dispatch(logoutAction());
    history.push(AppRoute.Main);
  };

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={AppRoute.MyList} className="user-block__link">
            <img src={avatar.avatarUrl} alt="User avatar" width="63" height="63"/>
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        <a href='/' className="user-block__link" onClick={handleLogoutButtonClick}>Sign out</a>
      </li>
    </ul>
  );
}

export default UserLoggedIn;
