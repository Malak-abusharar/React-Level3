import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import EditTask from "./pages/edit-task/edit-task";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Signin from "./pages/Sign-in/Signin";
import Signup from "./pages/Signup";
import ErrorPage from "./pages/error404";
import { useContext } from "react";
import DataContext from "./context/DataContext";

function App() {
  const { theme } = useContext(DataContext);
  return (
    <div className={`App ${theme}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/edit-task" element={<EditTask />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
