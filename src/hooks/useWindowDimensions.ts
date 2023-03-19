import { useEffect, useState } from "react";

const useWindowDimensions = () => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

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
