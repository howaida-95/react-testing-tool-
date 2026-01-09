import React, { useState, useEffect } from "react";

export const Users = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // server error --> request sent, and there's response but it's not ok
        if (!response.ok) {
          throw new Error("Request failed");
        }
        return response.json();
      })
      .then((data) =>
        setUsers(data.map((user: { name: string }) => user.name))
      )
      .catch(() => {
        // network error or thrown server error --> request sent, and there's no response
        setError("error fetching users");
      });
  }, []);

  return (
    <div>
      <h1>Users</h1>

      {error && <p>{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
};
