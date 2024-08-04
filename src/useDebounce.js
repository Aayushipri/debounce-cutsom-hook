import { useEffect } from "react";

//useDebounce custom hook with useEffect which is getting called only once when the component renders
export const useDebounce = (fn, val) => {
  useEffect(() => {
    //setTimeout for calling the logging function after few seconds it was last invoked.
    const timerID = setTimeout(() => {
      fn();
    }, 6000);

    //clearing out the timerID after the useEffect has been executed.
    return () => {
      clearTimeout(timerID);
    };
  }, [val]);
};
