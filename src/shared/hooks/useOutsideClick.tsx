import { useEffect, RefObject } from "react";

function useOutsideClick<T extends HTMLElement>(
  ref: RefObject<T>,
  action: () => void
): void {
  function handleClickOutside(event: MouseEvent) {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      action();
    }
  }

  useEffect(() => {
    const handleClick = (event: MouseEvent) => handleClickOutside(event);
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export default useOutsideClick;
