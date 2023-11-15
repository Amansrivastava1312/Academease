import "./App.css";
import Upload from "./component/upload/Upload";
import { Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import Resource from "./component/resource/Resource";
import Login from "./component/Auth/Login";
import Register from "./component/Auth/Register";
import AboutUs from "./component/about/AboutUs";
import Notes from "./component/Notes";
import PageNotFound from "./component/Pagenotfound";
import Faq from "./component/faq/Faq";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/resourse" element={<Resource />} />
      </Routes>
    </>
  );
}

export default App;
