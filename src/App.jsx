import { useState } from "react";
import "./App.css";

function App() {
  const [balance, setBalance] = useState(100);
  const [outputMsg, setMsg] = useState("");
  const handleTransfer = (event) => {
    event.preventDefault();
    const form = event.target;
    const amount = form.transfer.value;
    if (balance >= amount) {
      setBalance(balance - amount);
      setMsg(`balance is now ${balance}`);
    } else {
      setMsg("Balance is too low for transaction");
    }
  };
  return (
    <>
      <form
        onSubmit={handleTransfer}
        className="mx-auto w-80 flex-col items-center"
      >
        <div>
          <label htmlFor="transfer" className="sr-only">
            Transfer
          </label>
          <input
            type="text"
            placeholder="Transfer"
            id="transfer"
            className="rounded border pl-2"
            name="transfer"
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-purple-500 px-4 py-2 text-white"
        >
          Transfer
        </button>
      </form>
      <h2> {outputMsg}</h2>
    </>
  );
}

export default App;
