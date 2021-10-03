import WelcomeScreen from '../welcome-screen/welcome-screen';

type AppScreenProps = {
  year: number;
  genre: string;
  cardsCount: number;
  headCardTitle: string;
}

function App({year, genre, cardsCount, headCardTitle}: AppScreenProps): JSX.Element {
  return (<WelcomeScreen year={year} genre={genre} cardsCount={cardsCount} headCardTitle={headCardTitle} />);
}

export default App;
