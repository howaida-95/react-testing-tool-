import React from "react";
import { render, screen } from "@testing-library/react";
import { Counter } from "./counter";
import { userEvent } from "@testing-library/user-event";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    expect(incrementButton).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking the increment button", async () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    // simulate user click on the increment button
    await userEvent.click(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("renders a count of 2 after clicking the increment button twice", async () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    // simulate user click on the increment button twice
    await userEvent.dblClick(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });

  test("renders a count of 10 after clicking the set button", async () => {
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton", { name: "amount" });
    // user setup (type the amount into the input field)
    await userEvent.type(amountInput, "10");
    const setButton = screen.getByRole("button", { name: "set" });
    // user setup (click the set button)
    await userEvent.click(setButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });

  // test if the focus order is correct
  test("focus order is correct", async () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const amountInput = screen.getByRole("spinbutton", { name: "amount" });
    const setButton = screen.getByRole("button", { name: "set" });
    // focus on the body to avoid the focus order issue
    document.body.focus();

    const user = userEvent.setup();
    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
