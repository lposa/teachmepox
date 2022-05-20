import "./App.scss";
import Main from "./pages/Main";
import Projects from "./pages/Projects";

import { Routes, Route } from "react-router-dom";
import WhyMe from "./pages/WhyMe";
import Awards from "./pages/Awards";
import LetsTalk from "./pages/LetsTalk";
import Classes from "./pages/Classes";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/whyme" element={<WhyMe />} />
        <Route path="/letstalk" element={<LetsTalk />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
