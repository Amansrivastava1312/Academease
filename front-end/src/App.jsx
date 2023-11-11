import { useState } from "react";

//import Accordion from "./component/faq/Accordion";
import "./App.css";
import Accordion from "./component/faq/Accordion";
import Upload from "./component/upload/Upload";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Upload />
    </>
  );
}

export default App;
