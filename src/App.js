import React, {useLayoutEffect} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Footer from './Components/Footer';
import HomePage from "./Pages/HomePage";
import ProgrammingPage from "./Pages/ProgrammingPage";
import PartnersPage from "./Pages/PartnersPage";
import HomeVolunteerHero from "./Components/HomeVolunteerHero";
import FutureProgramsPage from "./Pages/FutureProgramsPage";
import OurAnimalsPage from "./Pages/OurAnimalsPage";


function App() {
  
useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

  return (
    <div className="App">
      <Router >
        <Header />
          <Routes>
            <Route>
              <Route path="/" element={<HomePage />} />
              <Route path="/ourProgramming" element={<ProgrammingPage />} />
              <Route path="/communityPartners" element={<PartnersPage />} />
              <Route path="/futurePrograms" element={<FutureProgramsPage />} />
              <Route path="/ourAnimals" element={<OurAnimalsPage />} />

            </Route>
          </Routes>
        <HomeVolunteerHero />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
