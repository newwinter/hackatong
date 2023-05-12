import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Page1 from "@pages/Page1";
import Page2 from "@pages/Page2";
import About from "@pages/About";
import Passport from "@pages/PassPort";
import Footer from "@components/Footer";
import NavBar from "@components/NavBar";
import HomePageNew from "@pages/HomePageNew";

function App() {
  const [countries, setCountries] = useState([])
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json`
    )
      .then((res) => res.json())
      .then((json) => setFlags(json))
      .catch((err) => console.error(err));
  }, [countries]);

  const countryValidated = (id, countryMonument) => {
    console.log(countries)
    const country = countries.find(country => {
      country.id === id;
    });

    if (!country) { setCountries([...countries, { id, countryMonument }]) }

  }

  return (
    <Router>
      <div>
        <NavBar />
      </div>
      <div />
      <Routes>
        <Route path="/" element={<HomePageNew />} />
        <Route path="/Page1" element={<Page1 />} />
       <Route path="/Page2/:id" element={<Page2 />} />
        <Route path="/Page2" element={
          <Page2
            countryValidated={countryValidated}
            countries={countries}
          />}
        />
        <Route path="/About" element={<About />} />
        <Route path="/Passport" element={
          <Passport
            flags={flags}
          />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
