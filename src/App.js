import About from "./page/About";
import Home from "./page/Home";
import Blogs from "./page/Blog";
import Navbar from "./page/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Blogs" element={<Blogs />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
