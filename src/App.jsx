import { HashRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductsDetail from "./pages/ProductsDetail";
import Purcheses from "./pages/Purchases";
import NavBar from "./components/NavBar";
import LoadingScreen from "./components/LoadingScreen"
import { useSelector } from "react-redux";
function App() {

  const setisLoading =  useSelector (state => state.isLoading);
  return (
    <HashRouter>
      <NavBar />
      {setisLoading && <LoadingScreen />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products/:id" element={<ProductsDetail />} />
        <Route path="/Purcheses" element={<Purcheses />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
}

export default App;