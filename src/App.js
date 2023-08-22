import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./style/sass/main.scss";
import Header from "./components/Haeder";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Error from "./pages/Error";

import Housings from "./pages/Housings";

function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <body>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/about" element={<About />} />

          <Route path="*" element={<Error />} />

          <Route path="/housings" element={<Housings />} />
        </Routes>
      </body>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
