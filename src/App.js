import About from "./page/About";
import Home from "./page/Home";
import Blogs from "./page/Blog";
import Navbar from "./page/navbar";
import NotFount from "./page/NotFount";
import Detail from "./page/detail";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Blogs" element={<Blogs />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="*" element={<NotFount />}></Route>
          <Route path="/home" element={<Navigate to="/" />}></Route>
          <Route path="/Blogs/:id" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
