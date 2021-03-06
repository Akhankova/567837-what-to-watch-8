import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../const';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import PlayerScreen from '../player-screen/video-player-screen';
import FilmBigCard from '../big-card-film/big-card.film';
import MovieDetailsScreen from '../movie-screen/movie-details-screen';
import MovieReviewsScreen from '../movie-screen/movie-reviews-screen';
import AddScreen from '../add-screen/add-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { useSelector } from 'react-redux';
import { getAuthorizationStatus } from '../../store/user-data/selectors';
import { AuthorizationStatus } from '../../types/api';
import LoadingScreen from '../loading/loading';
import SignInPrivateRoute from '../private-route/sign-in-private-route';

function App(): JSX.Element {
  const authStatus = useSelector(getAuthorizationStatus);

  return (
    authStatus === AuthorizationStatus.Unknown ?
      <LoadingScreen /> :
      <BrowserRouter>
        <Switch>
          <Route exact path={AppRoute.Main}>
            <WelcomeScreen />
          </Route>
          <PrivateRoute
            exact
            path={AppRoute.MyList}
            render={() => <MyListScreen />}
          >
          </PrivateRoute>
          <SignInPrivateRoute
            exact
            path={AppRoute.SignIn}
            render={() => <SignInScreen />}
          >
          </SignInPrivateRoute>
          <Route exact path={AppRoute.Player}>
            <PlayerScreen />
          </Route>
          <Route exact path={AppRoute.Film}>
            <FilmBigCard />
          </Route>
          <PrivateRoute
            exact
            path={AppRoute.AddReview}
            render={() => <AddScreen />}
          >
          </PrivateRoute>
          <Route exact path={AppRoute.FilmDetails}>
            <MovieDetailsScreen />
          </Route>
          <Route exact path={AppRoute.FilmReviews}>
            <MovieReviewsScreen />
          </Route>
          <Route>
            <NotFoundScreen />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
