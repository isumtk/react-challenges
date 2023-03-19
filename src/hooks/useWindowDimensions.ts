import { useEffect, useState } from "react";

const useWindowDimensions = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const trackDimensions = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", trackDimensions);
    return () => window.removeEventListener("resize", trackDimensions);
  }, []);

  return { width, height };
};

export default useWindowDimensions;
