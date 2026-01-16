import { useState } from "react";

export const useCounter = (initialCount: number = 0) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(initialCount);
  };











  
  return { count, increment, decrement, reset };
};
