import "./App.css";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/Navbar";
function App() {
  return (
    <>
      {/* <NavBar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/addProduct" component={AddProduct} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;