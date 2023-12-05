import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./layout/Home";
import Nav from "./layout/Nav";
import Footer from "./layout/Footer";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {

  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} /> {/* Default route redirects to /login */}
        <Route path="/login"element={<Login/>}/>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home/>}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
