import React from "react";

const useThrottled = (value: any, delay: number): any => {
  const [throttledValue, setThrottledValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setThrottledValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return throttledValue;
};

export default useThrottled;
