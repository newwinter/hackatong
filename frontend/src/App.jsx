import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Page1 from "@pages/Page1";
import Page2 from "@pages/Page2";
import Page3 from "@pages/Page3";
import Footer from "@components/Footer";
import Header from "@components/Header";

function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
