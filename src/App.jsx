import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigationbar from "./components/Navigationbar";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navigationbar />
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;