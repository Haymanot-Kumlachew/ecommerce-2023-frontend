import "./App.css";
// import { ReactDOM } from "react-dom/client";
// import { BrowserRouter ,  Route, Routes } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path='/product/:id' element={<ProductDetailsScreen/>} />
      </Routes>
    </Router>
  );
}

export default App;
