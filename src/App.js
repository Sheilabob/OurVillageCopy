import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeHero from './Components/HomeHero';


function App(props) {
  console.log(props)
  return (
    <div className="App">
      <HomeHero />
      {props.msg}
    </div>
  );
}

export default App;
