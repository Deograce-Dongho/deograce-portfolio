import { useEffect, useState } from "react";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { animateScroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScrollToTop = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-10 right-5 sm:right-10 z-10
        w-10 h-10 sm:w-12.5 sm:h-12.5 lg:w-15 lg:h-15
        flex justify-center items-center
        rounded-full
        transition-all duration-500 ease-in-out
        hover:scale-110
        bg-picto-primary hover:bg-picto-primary-dark text-white
        ${position < 200 ? "scale-0 pointer-events-none" : "scale-100"}
      `}
    >
      <FontAwesomeIcon icon={faAngleUp} size="2xl" />
    </button>
  );
};

export default ScrollToTop;