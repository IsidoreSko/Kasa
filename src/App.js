import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import About from "./pages/About";
// import Error from "./pages/Error";

import Housings from "./pages/Housings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* <Route path="/" element={<About />} />

      <Route path="/" element={<Error />} />*/}

        <Route path="/housings" element={<Housings />} />
      </Routes>
    </Router>
  );
}

export default App;
