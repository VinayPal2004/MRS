import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Materials from "./pages/Material.jsx";
import Products from "./pages/Product.jsx";
import Companies from "./pages/Company.jsx";
import AddProduct from "./pages/addproduct.jsx";
import AddMaterial from "./pages/addmaterial.jsx";
import MRS from "./pages/MRS.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/products" element={<Products />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/add-material" element={<AddMaterial />} />
        <Route path="/mrs" element={<MRS />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;