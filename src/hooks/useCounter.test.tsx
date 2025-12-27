import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  // ensure the initial count of 0 is rendered
  test("should render the initial count", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  // ensure the initial count of 10 is rendered
  /*
  test("should render the initial count of 10", () => {
    const { result } = renderHook(useCounter, { initialProps: 10 });
    expect(result.current.count).toBe(10);
  });
  */
  // ensure the increment function works correctly
  test("should render the count incremented by 1", () => {
    const { result } = renderHook(useCounter);
    // act() utility to ensure the increment function is executed
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });
  // ensure the decrement function works correctly
  test("should render the count decremented by 1", () => {
    const { result } = renderHook(useCounter);
    // act() utility to ensure the increment function is executed
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(-1);
  });
  // ensure the reset function works correctly
});
