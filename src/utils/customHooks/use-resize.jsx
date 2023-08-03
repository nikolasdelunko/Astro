import { useState, useEffect } from "react";

const useResize = () => {
  const [mob, setMob] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 793) {
        setMob(true);
      } else {
        setMob(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return mob
};

export default useResize;
