import "./App.css";
import Upload from "./component/upload/Upload";
import { Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import Resource from "./component/resource/Resource";
import Login from "./component/Auth/Login";
import Register from "./component/Auth/Register";
import AboutUs from "./component/about/AboutUs";
import Notes from "./component/Notes";
import Contact from "./component/contact/Contact";
import PageNotFound from "./component/Pagenotfound";
import Faq from "./component/faq/Faq";
import PrivateRoute from "./component/Routes/Private";
import Popular from "./component/PlayList/Popular";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<PrivateRoute />}>
          <Route path="" element={<Upload />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/resourse" element={<Resource />} />
        <Route path="/popular" element={<Popular />} />
      </Routes>
    </>
  );
}

export default App;
