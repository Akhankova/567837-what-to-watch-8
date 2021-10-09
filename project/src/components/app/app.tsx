import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import PlayerScreen from '../player-screen/player-screen';
import MovieScreen from '../movie-screen/movie-screen';
import MovieDetailsScreen from '../movie-screen/movie-details-screen';
import MovieReviewsScreen from '../movie-screen/movie-reviews-screen';
import AddScreen from '../add-screen/add-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {SmallCards, SmallFilmCard} from '../../types/small-film-card';

type AppScreenProps = {
  //year: number;
  //genre: string;
  //headCardTitle: string;
  movies: SmallCards;
}

//<WelcomeScreen movie={firstMovie as SmallFilmCard}/>
function App({movies}: AppScreenProps): JSX.Element {
  const [firstMovie] = movies;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <WelcomeScreen movie={firstMovie as SmallFilmCard}/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyListScreen />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.SignIn}>
          <SignInScreen />
        </Route>
        <Route exact path={AppRoute.Player}>
          <PlayerScreen />
        </Route>
        <Route exact path={AppRoute.Film}>
          <MovieScreen movie={firstMovie as SmallFilmCard}/>
        </Route>
        <Route exact path={AppRoute.AddReview}>
          <AddScreen movie={firstMovie as SmallFilmCard}/>
        </Route>
        <Route exact path={AppRoute.FilmDetails}>
          <MovieDetailsScreen movie={firstMovie as SmallFilmCard}/>
        </Route>
        <Route exact path={AppRoute.FilmReviews}>
          <MovieReviewsScreen movie={firstMovie as SmallFilmCard}/>
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
