import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeHero from './Components/HomeHero';
import Header from './Components/Header';
import MissionVisionGoals from './Components/MissionVisionGoals';


function App(props) {
  console.log(props)
  return (
    <div className="App">
      <Header />
      <HomeHero />
      <MissionVisionGoals />
      {props.msg}
    </div>
  );
}

export default App;
