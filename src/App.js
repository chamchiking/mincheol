import "bootstrap/dist/css/bootstrap.min.css";
import SSRProvider from "react-bootstrap/SSRProvider";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./containers/Home/index";
import MainNavbar from "./components/MainNavbar";
import Project from "./containers/Project";
import Blog from "./containers/Blog";

function App() {
  return (
    <SSRProvider>
      <div className="App">
        <Router>
          <MainNavbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/projects" element={<Project/>} />
            <Route path="/blog" element={<Blog/>} />
          </Routes>
        </Router>
      </div>
    </SSRProvider>
  );
}

export default App;