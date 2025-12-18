import { render, screen } from "@testing-library/react";
import { MuiMode } from "./mui-mode.tsx";
import { AppProviders } from "../../providers/app-providers.tsx";
describe("MuiMode", () => {
  test("renders text light mode", () => {
    /*
        provider inside app.tsx
        and we are rendering app.tsx here 
    */
    render(<MuiMode />, { wrapper: AppProviders });
    const textElement = screen.getByRole("heading");
    expect(textElement).toHaveTextContent("dark mode");
  });
});
