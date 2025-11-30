import MainPage from '../../pages/main-page/main-page';

type AppHotelsProps = {
  hotelsNumber: number;
}

function App({hotelsNumber}: AppHotelsProps): JSX.Element {
  return (
    <MainPage hotelsNumber={hotelsNumber}/>
  );
}

export default App;
