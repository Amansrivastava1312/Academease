import { useState } from "react";
import Accordion from "./component/upload/Accordion";
import "./App.css";
import Upload from "./component/upload/Upload";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Upload />
      <div className="App">
      <Accordion/>
      </div>
    </>
   
  );
}

export default App;
