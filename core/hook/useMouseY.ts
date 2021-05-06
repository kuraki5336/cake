import { useState, useEffect, useCallback } from "react";

function useMouseY() {
  const [mousePosY, setMousePosY] = useState(0);

  const mouseListener = useCallback(
    (event) => {
      setMousePosY(event.pageY);
    },
    [setMousePosY]
  );

  useEffect(() => {
    window.addEventListener("mousemove", mouseListener);
    return () => {
      window.removeEventListener("mousemove", mouseListener);
    };
  }, []);

  return mousePosY;
}

export default useMouseY;
