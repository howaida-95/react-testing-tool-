import React from "react";
import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

// describe block for Skills component tests used for grouping related tests
describe("Skills component", () => {
  const skills = ["HTML", "CSS", "JavaScript"];

  test("renders correctly", () => {
    // render the Skills component with sample skills
    render(<Skills skills={skills} />);
    // check if the list element is present in the document
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  // test(testName, testFunction)
  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    // check if each skill is rendered as a list item
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(skills.length);
  });

  // test to check if start learning button is not rendered in the doc initially
  test("the button start learning is not rendered in the doc initially", () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", { name: "Start learning" });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  // test to check if start learning button is not rendered in the doc initially
  test("the button login is rendered in the doc initially", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.queryByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });
});
