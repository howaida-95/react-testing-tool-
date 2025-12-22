import React from "react";
import { render, screen } from "../../test-utils";
import { MuiMode } from "./mui-mode.tsx";

describe("MuiMode", () => {
  test("renders text light mode", () => {
    /*
        provider inside app.tsx
        and we are rendering app.tsx here 
    */
    render(<MuiMode />);
    const textElement = screen.getByRole("heading");
    expect(textElement).toHaveTextContent("dark mode");
  });
});
