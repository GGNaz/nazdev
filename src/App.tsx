import Navbar from "./components/Navbar";
// import ScrollAnimation from "./components/ScrollAnimation";
import LandingPage from "./pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import "animate.css";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import ExperiencePage from "./pages/ExperiencePage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
      </Routes>

      {/* <ScrollAnimation>
        <div className="flex flex-col text-5xl gap-10 text-red-500 bg-slate-400">
          {Array(10)
            .fill("umay")
            .map((data) => (
              <div>{data}</div>
            ))}
        </div>
      </ScrollAnimation> */}
      {/* <ScrollAnimation>
        <div className="flex flex-col text-5xl gap-10 text-blue-500 bg-green-400">
          {Array(10)
            .fill("GAGO")
            .map((data) => (
              <div>{data}</div>
            ))}
        </div>
      </ScrollAnimation> */}
    </div>
  );
}

export default App;
