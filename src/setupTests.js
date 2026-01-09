// Polyfills for Web APIs required by MSW v2
// Must be set before any imports
const { TextEncoder, TextDecoder } = require("util");
const { ReadableStream, TransformStream, WritableStream } = require("node:stream/web");

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
global.ReadableStream = ReadableStream;
global.TransformStream = TransformStream;
global.WritableStream = WritableStream;

// Mock BroadcastChannel as it's not available in Node.js
global.BroadcastChannel = class BroadcastChannel {
  constructor(name) {
    this.name = name;
  }
  postMessage() {}
  close() {}
  addEventListener() {}
  removeEventListener() {}
  dispatchEvent() {
    return true;
  }
};

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
require("@testing-library/jest-dom");

const { server } = require("./mocks/server");

// Establish API mocking before all tests.
beforeAll(() =>
  server.listen({
    onUnhandledRequest: "warn",
  })
);

// Reset any request handlers that are declared during the tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());
