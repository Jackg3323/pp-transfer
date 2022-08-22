import PropTypes from "prop-types";

export default function Form({ balance, setBalance, setMsg, outputMsg }) {
  const handleTransfer = (event) => {
    event.preventDefault();
    const form = event.target;
    const amount = form.transfer.value;
    if (balance >= amount && amount > 0) {
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

Form.propTypes = {
  balance: PropTypes.number.isRequired,
  outputMsg: PropTypes.string.isRequired,
  setBalance: PropTypes.func.isRequired,
  setMsg: PropTypes.func.isRequired,
};
