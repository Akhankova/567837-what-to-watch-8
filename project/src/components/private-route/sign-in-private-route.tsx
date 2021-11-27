import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-data/selectors';

 type SignInPrivateRouteProps = RouteProps & {
   render: () => JSX.Element;
 }

function SignInPrivateRoute(props: SignInPrivateRouteProps): JSX.Element {
  const {exact, path, render} = props;
  const authStatus = useSelector(getAuthorizationStatus);
  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        (authStatus === AuthorizationStatus.NoAuth)
          ? render()
          : <Redirect to={AppRoute.Main} />
      )}
    />
  );
}

export default SignInPrivateRoute;
