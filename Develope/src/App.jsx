import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroPage from "./pages/HeroPage";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<PortfolioPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </Router>
  );
};

export default App;