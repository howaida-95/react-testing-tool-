import React from "react";
import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);
    // screen.debug();
    // screen.getByRole("");
    // test name
    // getByRole(role, options)
    const nameElement = screen.getByRole(
      "textbox", // role
      { name: "Name" }, // accessible name
    );
    // assert the element is in the document
    expect(nameElement).toBeInTheDocument();
    // getByRole(role, options)
    const bioElement = screen.getByRole(
      "textbox", // role
      { name: "Bio" }, // accessible name
    );
    // assert the element is in the document
    expect(bioElement).toBeInTheDocument();

    // test section
    const section1Element = screen.getByRole("heading", {
      level: 1,
      name: "Job application form",
    });
    expect(section1Element).toBeInTheDocument();

    const section2Element = screen.getByRole("heading", {
      level: 2,
      name: "Section 1",
    });
    expect(section2Element).toBeInTheDocument();

    // test name using getByLabelText
    const nameElement2 = screen.getByLabelText("Name", { selector: "input" }); // Name => label of input element
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText("Fullname");
    expect(nameElement3).toBeInTheDocument();

    const nameElement4 = screen.getByDisplayValue("Howaida");
    expect(nameElement4).toBeInTheDocument();

    const imageElement = screen.getByAltText("a person with a laptop");
    expect(imageElement).toBeInTheDocument();

    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    const termsElements2 = screen.getByLabelText(
      "I agree to the terms and conditions",
    );
    expect(termsElements2).toBeInTheDocument();

    const paragraphElement = screen.getByText("all fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();

    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

    // test job location
    // const jobLocationElement = screen.getByRole("combobox", { name: "Job location" });
    // expect(jobLocationElement).toBeInTheDocument();

    // test terms and conditions
    const termsAndConditionsElement = screen.getByRole("checkbox", {
      name: "I agree to the terms and conditions",
    });
    expect(termsAndConditionsElement).toBeInTheDocument();

    // test submit button
    const submitButtonElement = screen.getByRole("button", { name: "Submit" });
    expect(submitButtonElement).toBeInTheDocument();
  });
});
