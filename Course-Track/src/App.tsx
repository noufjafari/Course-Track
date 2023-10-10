import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Update from "./hooks/Update";
import Stulogin from "./pages/Stulogin";
import Stusingup from "./pages/Stusingup";
import CoursPage from "./pages/CoursPage";
import CoursStud from "./pages/CoursStud";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studentlogin" element={<Stulogin />} />
        <Route path="/singup" element={<Stusingup />} />
        <Route path="/CoursPage" element={<CoursPage />} />
        <Route path="/CoursPage/stud" element={<CoursStud />} />
        <Route path="/Update" element={<Update />} />
      </Routes>
    </>
  );
}

export default App;
