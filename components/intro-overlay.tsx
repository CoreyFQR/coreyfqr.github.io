"use client";

import { useEffect, useLayoutEffect, useState } from "react";

type TitlePosition = {
  left: number;
  top: number;
  width: number;
};

const initialName = "Corey Fu";
const completedName = "Corey Foo Quan Rui";
const typedSuffix = "oo Quan Rui";

export function IntroOverlay() {
  const [isVisible, setIsVisible] = useState(true);
  const [titlePosition, setTitlePosition] = useState<TitlePosition>();
  const [isPositioned, setIsPositioned] = useState(false);
  const [displayedName, setDisplayedName] = useState(initialName);
  const [isComplete, setIsComplete] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useLayoutEffect(() => {
    const title = document.getElementById("hero-name");

    if (!title) {
      return;
    }

    let frameId = 0;
    let isCancelled = false;
    let fontsAreReady = false;

    const updateTitlePosition = () => {
      const { left, top, width } = title.getBoundingClientRect();
      setTitlePosition({ left, top, width });

      if (fontsAreReady) {
        setIsPositioned(true);
      }
    };

    const prepareTitlePosition = async () => {
      await document.fonts.ready;
      fontsAreReady = true;
      frameId = window.requestAnimationFrame(() => {
        if (!isCancelled) {
          updateTitlePosition();
        }
      });
    };

    void prepareTitlePosition();

    const observer = new ResizeObserver(updateTitlePosition);
    observer.observe(title);
    window.addEventListener("resize", updateTitlePosition);

    return () => {
      isCancelled = true;
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
      window.removeEventListener("resize", updateTitlePosition);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("intro-complete");
  }, []);

  useEffect(() => {
    if (!isPositioned) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayedName(completedName);
      setIsComplete(true);
      setIsClosing(true);
      return;
    }

    let typeIntervalId: number | undefined;
    let closeTimeoutId: number | undefined;

    const deleteTimeoutId = window.setTimeout(() => {
      setDisplayedName("Corey F");
    }, 1050);

    const typeTimeoutId = window.setTimeout(() => {
      let typedCharacterCount = 0;

      typeIntervalId = window.setInterval(() => {
        typedCharacterCount += 1;
        setDisplayedName(`Corey F${typedSuffix.slice(0, typedCharacterCount)}`);

        if (typedCharacterCount === typedSuffix.length) {
          window.clearInterval(typeIntervalId);
          setIsComplete(true);
          closeTimeoutId = window.setTimeout(() => {
            setIsClosing(true);
          }, 280);
        }
      }, 90);
    }, 1350);

    return () => {
      window.clearTimeout(deleteTimeoutId);
      window.clearTimeout(typeTimeoutId);
      window.clearInterval(typeIntervalId);
      window.clearTimeout(closeTimeoutId);
    };
  }, [isPositioned]);

  useEffect(() => {
    if (!isClosing) {
      return;
    }

    document.documentElement.classList.add("intro-complete");
    const timeoutId = window.setTimeout(() => {
      setIsVisible(false);
    }, 550);

    return () => {
      window.clearTimeout(timeoutId);
      document.documentElement.classList.remove("intro-complete");
    };
  }, [isClosing]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="intro-overlay fixed inset-0 z-50 bg-paper"
    >
      <p
        className={`intro-name display-font text-center text-5xl font-semibold leading-[1.05] text-ink sm:text-6xl${
          isPositioned ? " is-positioned" : ""
        }`}
        style={
          titlePosition
            ? {
                left: titlePosition.left,
                top: titlePosition.top,
                width: titlePosition.width,
              }
            : undefined
        }
      >
        <span>{displayedName}</span>
        <span className={`intro-caret${isComplete ? " is-complete" : ""}`} />
      </p>
    </div>
  );
}
