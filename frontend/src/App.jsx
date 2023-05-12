import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Page1 from "@pages/Page1";
import Page2 from "@pages/Page2";
import About from "@pages/About";
import Passport from "@pages/PassPort";
import Footer from "@components/Footer";
import NavBar from "@components/NavBar";
import HomePageNew from "@pages/HomePageNew";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
      </div>
      <div />
      <Routes>
        <Route path="/" element={<HomePageNew />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/About" element={<About />} />
        <Route path="/Passport" element={<Passport />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
