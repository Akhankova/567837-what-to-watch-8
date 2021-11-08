import Logo from '../logo/logo';
import { useSelector} from 'react-redux';
import UserLoggedIn from '../user-info/user-signIn';
import UserNotLoggedIn from '../user-info/user-signout';
import { AuthorizationStatus } from '../../const';
import React from 'react';
import { getAuthorizationStatus } from '../../store/user-data/selectors';

function HeaderScreen(): JSX.Element {
  const authStatus = useSelector(getAuthorizationStatus);
  return (
    <header className="page-header film-card__head">
      <div className="logo">
        <Logo />
      </div>
      {authStatus === AuthorizationStatus.Auth ? <UserLoggedIn /> : <UserNotLoggedIn />}
    </header>
  );
}

export default React.memo(HeaderScreen);
