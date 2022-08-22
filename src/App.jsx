import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";

function App() {
  const [balance, setBalance] = useState(100);
  const [outputMsg, setMsg] = useState("");

  const handleFocus = (event) => {
    console.log("focused");
  };
  const handleBlur = (event) => {
    console.log("Blurred");
  };

  return (
    <Form
      balance={balance}
      setBalance={setBalance}
      setMsg={setMsg}
      outputMsg={outputMsg}
    />
  );
}

export default App;
