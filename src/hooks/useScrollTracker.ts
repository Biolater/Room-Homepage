import { useState, useEffect } from "react";

function useScrollTracker() {
  const [scrollY, setScrollY] = useState(0);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get current scroll position in pixels
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Calculate if the user has scrolled to the bottom
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrolledToBottom = currentScrollY + windowHeight >= documentHeight;
      setAtBottom(scrolledToBottom);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Call handleScroll once in case the user has already scrolled
    handleScroll();

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollY, atBottom };
}

export default useScrollTracker;
