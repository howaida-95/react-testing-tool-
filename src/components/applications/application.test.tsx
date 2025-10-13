import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Application } from "./application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);
    // test name
    const nameElement = screen.getByRole("textbox", { name: "Name" });
    // assert the element is in the document
    expect(nameElement).toBeInTheDocument();

    // test job location
    const jobLocationElement = screen.getByRole("combobox", { name: "Job location" });
    expect(jobLocationElement).toBeInTheDocument();

    // test terms and conditions
    const termsAndConditionsElement = screen.getByRole("checkbox", { name: "I agree to the terms and conditions" });
    expect(termsAndConditionsElement).toBeInTheDocument();


    // test submit button
    const submitButtonElement = screen.getByRole("button", { name: "Submit" });
    expect(submitButtonElement).toBeInTheDocument();
  });
});
