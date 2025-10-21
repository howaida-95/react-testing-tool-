jest section summary 
=====================
- jest watch mode 
- filtering tests with watch mode (test.only & test.skip)
- grouping tests (using describe)
- file name conventions 
- coverage 
- assertions

## TTD (test driven development)

test before code
1- tests
2- code
3- refactor

## jest watch mode --> run tests for changed files only since last commit

## filtering test --> from terminal / from code test.skpi(), test.only()

## grouping tests together --> describe(name, fn) method

name --> group name
fn -> expectations
can use -> describe.only(name, fn) | describe.skip(name, fn)

## filename convention

.test.js
.test.tsx
.spec.js
.spec.tsx
**tests** (folders) ===========> .js or .tsx

=> alternative test methods:
test(), it()
test only = fit
test exclude = xit
=========================================================

# code coverage

metric help you understand how much of your software code is tested
1.statement coverage --> number of executed statements
2.branches coverage --> number of executed branches of control structures(ex: if statement)
3-function coverage --> number of called functions
4.line coverage --> number of tested lines of source code

## collectCoverageFrom:

Tells Jest which files to include when computing code coverage (glob patterns).

## coveragePathIgnorePatterns:

Regex patterns for paths Jest should ignore when calculating coverage.

## coverage threshold

# to enforce minimum coverage percentages.

assertion
=> decides if a test passes or fails

- expect(value) method
  arg value --> should be the value that your code produces
- matcher function --> assert something about the value , optionally accept arg(corrected expected value)
  https://jestjs.io/docs/using-matchers

## Jest Matchers Examples

### Truthiness Matchers

```javascript
test("truthiness matchers", () => {
  expect(true).toBeTruthy();
  expect(false).toBeFalsy();
  expect(null).toBeNull();
  expect(undefined).toBeUndefined();
  expect(0).toBeFalsy();
  expect("").toBeFalsy();
  expect("hello").toBeTruthy();
});
```

### Numbers Matchers

```javascript
test("number matchers", () => {
  expect(2 + 2).toBe(4);
  expect(2 + 2).toEqual(4);
  expect(2.5).toBeCloseTo(2.5);
  expect(2.5).toBeCloseTo(2.4, 0); // 0 decimal places
  expect(2.5).toBeCloseTo(2.4, 1); // 1 decimal place
  expect(10).toBeGreaterThan(5);
  expect(10).toBeGreaterThanOrEqual(10);
  expect(5).toBeLessThan(10);
  expect(5).toBeLessThanOrEqual(5);
});
```

### Strings Matchers

```javascript
test("string matchers", () => {
  expect("Hello World").toMatch(/World/);
  expect("Hello World").toMatch("World");
  expect("Hello World").toContain("World");
  expect("Hello World").toHaveLength(11);
  expect("hello").toMatch(/^h/); // starts with h
  expect("hello").toMatch(/o$/); // ends with o
});
```

### Arrays and Iterables Matchers

```javascript
test("array matchers", () => {
  const fruits = ["apple", "banana", "orange"];

  expect(fruits).toContain("banana");
  expect(fruits).toHaveLength(3);
  expect(fruits).toEqual(["apple", "banana", "orange"]);
  expect(fruits).not.toContain("grape");

  // Array of objects
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
  ];
  expect(users).toContainEqual({ id: 1, name: "John" });
});
```

### Objects Matchers

```javascript
test("object matchers", () => {
  const user = {
    name: "John",
    age: 30,
    email: "john@example.com",
  };

  expect(user).toEqual({
    name: "John",
    age: 30,
    email: "john@example.com",
  });

  expect(user).toHaveProperty("name");
  expect(user).toHaveProperty("age", 30);
  expect(user.name).toBe("John");
});
```

### Exception Matchers

```javascript
test("exception matchers", () => {
  // Test that function throws
  expect(() => {
    throw new Error("Something went wrong");
  }).toThrow();

  // Test specific error message
  expect(() => {
    throw new Error("Something went wrong");
  }).toThrow("Something went wrong");

  // Test error type
  expect(() => {
    throw new Error("Something went wrong");
  }).toThrow(Error);
});
```

### Async Matchers

```javascript
test("async matchers", async () => {
  // Promise resolves
  await expect(Promise.resolve("success")).resolves.toBe("success");

  // Promise rejects
  await expect(Promise.reject("error")).rejects.toBe("error");

  // Async function
  const asyncFunction = async () => {
    return "async result";
  };

  await expect(asyncFunction()).resolves.toBe("async result");
});
```

### Custom Matchers

```javascript
// Custom matcher example
expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () => `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
      };
    }
  },
});

test("custom matcher", () => {
  expect(5).toBeWithinRange(1, 10);
  expect(15).not.toBeWithinRange(1, 10);
});
```

### Negation

```javascript
test("negation examples", () => {
  expect(2 + 2).not.toBe(5);
  expect("hello").not.toContain("world");
  expect([1, 2, 3]).not.toContain(4);
  expect(null).not.toBeUndefined();
});
```
===============================================================================================================
