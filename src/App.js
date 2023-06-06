import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import PackageHeader from "./components/Header/PackageHeader";
import Dashboard from "./components/Dashboard/Dashboard";
import Wwe from "./components/SubPages/Wwe";
import Contact from "./components/SubPages/Contact";
import Products from "./components/SubPages/Products";
import LiquidProducts from "./components/SubPages/LiquidProducts";
import Bp from "./components/Buyproduct/Bp";
import Delivery from "./components/Buyproduct/Delivery";
import Confirmation from "./components/Buyproduct/Confirmation";
import Menu from "./components/Header/Menu";
function App() {
  return (
    <div className="App">

      <Router>
        <PackageHeader />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/wwe" element={<Wwe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/granular" element={<Products />} />
          <Route path="/liquid" element={<LiquidProducts />} />
          <Route path="/buy" element={<Bp />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
