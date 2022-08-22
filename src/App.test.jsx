import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import App from "./App";

it("renders correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("attempts to transfer an amount from the balance", () => {
  const transferAmount = 10;

  render(<App />);

  const input = screen.getByLabelText(/transfer/i);
  const transferBtn = screen.getByRole("button", { name: "transfer" });

  userEvent.type(input, transferAmount);
  userEvent.click(transferBtn);

  const h2 = screen.getByRole("heading", { level: 2 });

  expect(h2.textContent).toContain(100 - transferAmount);
});
