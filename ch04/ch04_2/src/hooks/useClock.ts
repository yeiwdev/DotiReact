import { useState } from "react";
import { useInterval } from "./useInterval";

export const useClock = () => {
  const [today, setToday] = useState(new Date());
  const callbackFunc = () => {
    console.log(`callbackFunc`);
    setToday(new Date());
  };
  useInterval(callbackFunc, 1000);

  return today;
};
