import { useEffect, useState } from "react";

function useHandleClick(reference, initialState) {
  const [bool, setBool] = useState(initialState);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (reference.current !== null && !reference.current.contains(e.target)) {
        setBool(!bool);
      }
    };
    if (bool) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [bool,reference]);

  return [bool, setBool];
}

export default useHandleClick;
