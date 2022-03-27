import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeHero from './Components/HomeHero';
import Header from './Components/Header';
import MissionVisionGoals from './Components/MissionVisionGoals';
import HomeLowerHero from './Components/HomeLowerHero';
import HomeOurPrograms from './Components/HomeOurPrograms';
import HomeHistory from './Components/HomeHistory';
import HomeVolunteerHero from './Components/HomeVolunteerHero';
import Footer from './Components/Footer';


function App(props) {
  console.log(props)
  return (
    <div className="App">
      <Header />
      <HomeHero />
      <MissionVisionGoals />
      <HomeLowerHero />
      <HomeOurPrograms />
      <HomeHistory />
      <HomeVolunteerHero />
      <Footer />
      {props.msg}
    </div>
  );
}

export default App;
