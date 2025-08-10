



import React, { useState, useEffect } from "react";
import './TypingEffect.css';

const TypingEffect = ({ texts, speed = 100, pauseDuration = 1000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [pause, setPause] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  // Start typing effect after 5 seconds
  useEffect(() => {
    const startTimeout = setTimeout(() => setStartTyping(true), 2500);
    return () => clearTimeout(startTimeout);
  }, []);

  useEffect(() => {
    // Stop the typing animation after fully writing the last text
    if (!startTyping || (textIndex === texts.length - 1 && charIndex === texts[textIndex].length && !isDeleting)) {
      return;
    }

    if (pause) {
      const pauseTimeout = setTimeout(() => setPause(false), pauseDuration);
      return () => clearTimeout(pauseTimeout);
    }

    const intervalId = setInterval(() => {
      const currentText = texts[textIndex];

      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setDisplayedText((prev) => prev + currentText.charAt(charIndex));
          setCharIndex((prev) => prev + 1);
        } else if (textIndex < texts.length - 1) {
          setIsDeleting(true);
          setPause(true);
        }
      } else {
        if (charIndex > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setPause(true);
          setTextIndex((prevIndex) => prevIndex + 1);
        }
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [texts, charIndex, isDeleting, pause, textIndex, pauseDuration, speed, startTyping]);

  return (
    <h1 className="typing-effect">
      <b className="fs-4 font-[f4] text-3xl sm:text-5xl md:text-6xl">
        {displayedText && (
          <>
            {displayedText.split(" ").length >= 1 ? (
              <>
                <span>{displayedText.substring(0, displayedText.lastIndexOf(" "))}</span>
                <span style={{ color: "#9B5DE5" }}> {displayedText.split(" ").slice(-1)}</span>
              </>
            ) : (
              <span>{displayedText}</span>
            )}
          </>
        )}
      </b>
      <span className="cursor text-3xl sm:text-5xl  md:text-6xl">|</span> {/* Blinking cursor */}
    </h1>
  );
};

export default TypingEffect;
