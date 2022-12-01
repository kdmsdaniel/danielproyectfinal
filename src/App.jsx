import { HashRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductsDetail from "./pages/ProductsDetail";
import Purcheses from "./pages/Purchases";
import NavBar from "./components/NavBar";
import LoadingScreen from "./components/LoadingScreen"
import { useSelector } from "react-redux";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { Container } from "react-bootstrap";

function App() {

  const setisLoading =  useSelector (state => state.isLoading);
  return (
    <HashRouter>
      <NavBar />
      {setisLoading && <LoadingScreen />}
       <Container className="my-4">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products/:id" element={<ProductsDetail />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
         <Route path="/Purcheses" element={<Purcheses />} />      
        </Route>
      </Routes>
      </Container>
    </HashRouter>
  );
}

export default App;