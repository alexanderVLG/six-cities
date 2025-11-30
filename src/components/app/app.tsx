import MainScreen from '../pages/main-screen/main-screen';

type AppHotelsProps = {
  hotelsNumber: number;
}

function App({hotelsNumber}: AppHotelsProps): JSX.Element {
  return (
    <MainScreen hotelsNumber={hotelsNumber}/>
  );
}

export default App;
