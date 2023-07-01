import LandingPage from "./pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import "animate.css";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import ExperiencePage from "./pages/ExperiencePage";
import Contact from "./pages/Contact";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    localStorage.setItem("theme", "light");
  }, []);
  return (
    <div className="bg-customWhite dark:bg-customBlack h-screen w-full scroll-smooth">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
