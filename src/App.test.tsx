import { render, screen } from "@testing-library/react";
import App from "./App.tsx";

test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/test/i);
    expect(linkElement).toBeInTheDocument();
});

/*
test(
        name, --> define test & its result 
        fn, --> expectation of test 
        timeout --> 
    )

*** notes *** 


*/
