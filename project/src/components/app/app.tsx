import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import PlayerScreen from '../player-screen/player-screen';
import MovieScreen from '../movie-screen/movie-screen';
import AddScreen from '../add-screen/add-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
//import {SmallFilmCard} from '../../types/small-film-card';

type AppScreenProps = {
  year: number;
  genre: string;
  headCardTitle: string;
}

//<WelcomeScreen year={year} genre={genre} headCardTitle={headCardTitle}/>
function App({year, genre, headCardTitle}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <WelcomeScreen year={year} genre={genre} headCardTitle={headCardTitle}/>
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
          <MovieScreen />
        </Route>
        <Route exact path={AppRoute.AddReview}>
          <AddScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
