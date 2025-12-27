import React from "react";
import { screen, render } from "@testing-library/react";
import { CounterTwo } from "./counter-two";
import { userEvent } from "@testing-library/user-event";

describe("CounterTwo", () => {
  // ensure the component renders correctly
  test("renders correctly", () => {
    render(<CounterTwo count={0} />);
    const countElement = screen.getByText("Counter Two");
    expect(countElement).toBeInTheDocument();
  });

  // mock functions
  test("handlers are called", async () => {
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(<CounterTwo count={0} handleIncrement={incrementHandler} handleDecrement={decrementHandler} />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const decrementButton = screen.getByRole("button", { name: "Decrement" });
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
    await userEvent.click(incrementButton);
    expect(incrementHandler).toHaveBeenCalledTimes(1);
    await userEvent.click(decrementButton);
    expect(decrementHandler).toHaveBeenCalledTimes(1);

    //screen.debug();
  });
});
