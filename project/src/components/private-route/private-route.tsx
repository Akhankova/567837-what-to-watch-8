import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import { AppRoute, AUTH_TOKEN_KEY_NAME } from '../../const';

 type PrivateRouteProps = RouteProps & {
   render: () => JSX.Element;
 }

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {exact, path, render} = props;
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        token
          ? render()
          : <Redirect to={AppRoute.SignIn} />
      )}
    />
  );
}

export default PrivateRoute;
