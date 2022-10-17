import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboveHeader from "./components/AboveHeader";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";

function App() {
  return (
    <div>
      <AboveHeader />
      <Navbar />

      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
