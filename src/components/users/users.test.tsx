/*
render => used to render the component
screen => used to implement the testing playground (it's a global object that contains the testing playground)
for assertion we use expect(value) + matcher function (form jest & jest dom)
*/
import React from "react";
import { render, screen } from "@testing-library/react";
import { Users } from "./users";
import { server } from "../../mocks/server";
import { http, HttpResponse } from "msw";

describe("Users", () => {
  test("renders correctly", async () => {
    render(<Users />);
    const textElement = screen.getByText("Users");
    expect(textElement).toBeInTheDocument();
    await screen.findAllByRole("listitem");
  });

  test("renders a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });

  // assert error message is displayed in the dom when the api call fails
  test("renders error message when the api call fails", async () => {
    /*
      reset the handler we have in the handlers.ts file
      so that the api call fails
      and the error message is displayed in the dom
      => we use server.use() to reset the handler
      => we use http.get() to mock the api call
      => we use HttpResponse.json() to mock the api response
      => we use { status: 500 } to mock the api response status
      => we use return HttpResponse.json([], { status: 500 }); to mock the api response
    */
    server.use(
      http.get("https://jsonplaceholder.typicode.com/users", () => {
        return HttpResponse.json([], { status: 500 });
      }),
    );
    render(<Users />);
    const errorMessage = await screen.findByText("error fetching users");
    expect(errorMessage).toBeInTheDocument();
  });
});
