import { useEffect } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// Full-screen view of a project image.
// Closes with the X button, the Escape key or a click outside the image.
const ImageLightbox = ({ image, title, onClose }) => {
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
    };

    // Stop the page from scrolling behind the overlay
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  // Rendered in <body> so the overlay is not affected by the card's hover effects
  return createPortal(
    <div
      className="lightbox-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-[#132238]/80 backdrop-blur-sm p-4 sm:p-10 cursor-zoom-out"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} image`}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 grid h-11 w-11 place-items-center rounded-full bg-white/15 border border-white/25 text-white text-xl hover:bg-white hover:text-[#132238] transition-colors duration-300 cursor-pointer"
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>

      <figure
        className="lightbox-image flex max-h-full max-w-6xl flex-col items-center cursor-default"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={image}
          alt={`${title} image`}
          className="max-h-[80vh] w-auto max-w-full rounded-2xl bg-white object-contain shadow-2xl"
        />
        <figcaption className="mt-4 font-display text-lg font-semibold text-white">
          {title}
        </figcaption>
      </figure>
    </div>,
    document.body
  );
};

export default ImageLightbox;
