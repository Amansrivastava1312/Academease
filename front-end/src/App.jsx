import { useState } from "react";

import "./App.css";
import Upload from "./component/upload/Upload";
import { Route, Routes } from "react-router-dom";
import Faq from "./component/faq/Faq";
import Home from "./component/home/Home";
import Resource from "./component/resource/Resource";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/upload" element={<Upload />} />
        <Route path="/" element={<Home />} />
        <Route path="/resourse" element={<Resource />} />
      </Routes>
    </>
  );
}

export default App;
