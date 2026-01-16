# 1️⃣ Mock functions with Jest

📌 What it means

Mocking functions with Jest allows you to:

Replace real implementations

Track how functions are called

Control return values

Used mainly for unit tests.

✅ Example: Mock a utility function
utils/formatName.ts
export const formatName = (name: string) => name.toUpperCase();

Component
import { formatName } from "../utils/formatName";

export const UserName = ({ name }: { name: string }) => {
return <span>{formatName(name)}</span>;
};

Test
import { render, screen } from "@testing-library/react";
import { UserName } from "./UserName";
import \* as utils from "../utils/formatName";

jest.spyOn(utils, "formatName").mockReturnValue("MOCKED");

test("mocks function with jest", () => {
render(<UserName name="john" />);
expect(screen.getByText("MOCKED")).toBeInTheDocument();
});

✅ When to use:

Pure functions

Utilities

Hooks

Services

# 2️⃣ Mock HTTP requests with MSW

📌 What it means

MSW intercepts real network requests and returns mocked responses.
This allows integration-style tests without touching production code.

✅ Example: Mock API success response
MSW handler
import { http, HttpResponse } from "msw";

export const handlers = [
http.get("/api/users", () => {
return HttpResponse.json([
{ id: 1, name: "John" },
{ id: 2, name: "Jane" },
]);
}),
];

Component
export const Users = () => {
const [users, setUsers] = React.useState<string[]>([]);

React.useEffect(() => {
fetch("/api/users")
.then((res) => res.json())
.then((data) => setUsers(data.map((u: any) => u.name)));
}, []);

return (

<ul>
{users.map((user) => (
<li key={user}>{user}</li>
))}
</ul>
);
};

Test
test("renders users from api", async () => {
render(<Users />);
const items = await screen.findAllByRole("listitem");
expect(items).toHaveLength(2);
});

✅ When to use:

Fetch / Axios calls

Integration tests

Realistic backend behavior

# 3️⃣ Handle error responses with MSW

📌 What it means

MSW allows you to simulate:

400 / 401 / 500 errors

Network failures

Timeouts

This ensures your UI handles failures correctly.

✅ Example: Test error handling
Component (important fix: response.ok)
export const Users = () => {
const [error, setError] = React.useState<string | null>(null);

React.useEffect(() => {
fetch("/api/users")
.then((res) => {
if (!res.ok) throw new Error("Failed");
return res.json();
})
.catch(() => setError("error fetching users"));
}, []);

if (error) return <p>{error}</p>;
return <p>Users loaded</p>;
};

MSW error handler
server.use(
http.get("/api/users", () => {
return HttpResponse.json({}, { status: 500 });
})
);

Test
test("shows error message when api fails", async () => {
render(<Users />);
expect(
await screen.findByText(/error fetching users/i)
).toBeInTheDocument();
});

✅ What this tests:

UI error states

Fetch failure logic

User feedback
