import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dictaphone from "./component";
import "regenerator-runtime/runtime";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Dictaphone />
    </>
  );
}

export default App;