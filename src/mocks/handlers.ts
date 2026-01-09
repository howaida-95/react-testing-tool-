/*
mock rest api responses
rest => used to mock rest api responses
graphql => used to mock graphql api responses
http => used to mock http requests
HttpResponse => used to mock http responses

*/

import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/users", () => {
    return HttpResponse.json([
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
      { id: 3, name: "Jim" },
    ]);
  }),
];
