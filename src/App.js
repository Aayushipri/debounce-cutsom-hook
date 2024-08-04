import React from "react";
import { useState } from "react";
import { useDebounce } from "./useDebounce";

const App = () => {
  //Declaring value and setValue using useState.
  const [value, setValue] = useState("");

  //function for logging input value
  const logInputValueAfterFewSeconds = () => {
    console.log(value);
  };

  //calling useDebounce custom hook for logging value after few seconds and not every time user types
  useDebounce(logInputValueAfterFewSeconds, value);

  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
};

export default App;
