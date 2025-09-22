// @ts-nocheck
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ErrorPage from "./pages/error404";
import {useContext } from "react";
import DataContext from "./context/DataContext";


function App() {
  const {theme} = useContext(DataContext);
  return (
    <div className={`App ${theme}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        
  <Route path="/signin" element={<Signin />} />
  <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
