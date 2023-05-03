import {} from "react";
import "./App.css";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/contact-us" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
