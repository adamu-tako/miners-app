import { useLayoutEffect, useRef, useState } from "react";

const useResizeObserver = () => {
  const [navBarHeight, setNavBarHeight] = useState(0);
  const topRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (topRef.current && topRef.current.offsetHeight) {
        setNavBarHeight(topRef.current.offsetHeight);
      }
    };

    handleResize();

    const resizeObserver = new ResizeObserver(handleResize);
    if (topRef.current) {
      resizeObserver.observe(topRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { topRef, navBarHeight };
};

export default useResizeObserver;
