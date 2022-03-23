import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeHero from './Components/HomeHero';
import Header from './Components/Header';
import MissionVisionGoals from './Components/MissionVisionGoals';
import HomeLowerHero from './Components/HomeLowerHero';


function App(props) {
  console.log(props)
  return (
    <div className="App">
      <Header />
      <HomeHero />
      <MissionVisionGoals />
      <HomeLowerHero />
      {props.msg}
    </div>
  );
}

export default App;
