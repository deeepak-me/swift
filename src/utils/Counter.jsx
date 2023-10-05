import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick1 = () => {
    setCounter(counter + 1);
  };

  const handleClick2 = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return { handleClick1, handleClick2, counter };
};

export default Counter;
