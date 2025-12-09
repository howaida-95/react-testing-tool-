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
});
