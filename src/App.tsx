import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboveHeader from "./components/AboveHeader";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";

import Home from "./pages/Home";
import ProductViewPage from "./pages/ProductViewPage";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <AboveHeader />
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Cart />} path="/cart" />
          <Route element={<ProductViewPage />} path="/product/:productId" />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
