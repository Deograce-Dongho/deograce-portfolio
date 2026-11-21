import { useEffect, useState } from "react";

// Types a phrase letter by letter, waits, deletes it and moves to the next one
const TypingText = ({ phrases, typeSpeed = 70, deleteSpeed = 35, pause = 1800 }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Without animations, simply show the first phrase
    if (reduceMotion) {
      setText(phrases[0]);
      return;
    }

    const current = phrases[index];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
    } else {
      timeout = setTimeout(
        () =>
          setText(
            deleting
              ? current.slice(0, text.length - 1)
              : current.slice(0, text.length + 1)
          ),
        deleting ? deleteSpeed : typeSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, phrases, typeSpeed, deleteSpeed, pause]);

  return (
    <span className="text-picto-primary">
      <span aria-hidden="true">{text}</span>
      <span className="typing-caret" aria-hidden="true"></span>
      <span className="sr-only">{phrases.join(", ")}</span>
    </span>
  );
};

export default TypingText;
