import WelcomeScreen from '../welcome-screen/welcome-screen';

type AppScreenProps = {
  year: number;
  genre: string;
}

function App({year, genre}: AppScreenProps): JSX.Element {
  return (<WelcomeScreen year={year} genre={genre}/>);
}

export default App;
