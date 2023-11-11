import { useState } from "react";

//import Accordion from "./component/faq/Accordion";
import "./App.css";
import Accordion from "./component/faq/Accordion";
import Upload from "./component/upload/Upload";
import { Route, Routes } from "react-router-dom";
import Faq from "./component/faq/Faq";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/upload" element={<Upload />} />
        <Route path="/" element={<Faq />} />
      </Routes>
    </>
  );
}

export default App;
