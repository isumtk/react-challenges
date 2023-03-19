import { useEffect, useState } from "react";

const usePageBottom = (offset: number) => {
  const [hasReachedOffset, setHasReachedOffset] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const wHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      const distanceFromOffset = docHeight - (scrollTop + wHeight);

      setHasReachedOffset(distanceFromOffset <= offset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return hasReachedOffset;
};

export default usePageBottom;
