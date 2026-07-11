"use client";

import { useEffect, useState } from "react";

type TypewriterTextProps = {
  text: string;
  className?: string;
};

export function TypewriterText({ text, className }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayText(text);
      return;
    }

    let index = 0;
    let timeoutId: number;

    setDisplayText("");

    const typeNextCharacter = () => {
      index += 1;
      setDisplayText(text.slice(0, index));

      if (index < text.length) {
        timeoutId = window.setTimeout(typeNextCharacter, 42);
      }
    };

    timeoutId = window.setTimeout(typeNextCharacter, 300);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">{displayText}</span>
      <span
        aria-hidden="true"
        className="typewriter-cursor ml-1 inline-block h-[1em] w-px translate-y-1 bg-ink"
      />
    </span>
  );
}
