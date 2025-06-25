import { useState, useEffect } from "react";

export const useTypewriter = (texts, speed = 100, pause = 1000) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (index === texts.length) return;

    if (forward && subIndex === texts[index].length) {
      setTimeout(() => setForward(false), pause);
    } else if (!forward && subIndex === 0) {
      setForward(true);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) =>
        forward ? prev + 1 : prev - 1
      );
    }, forward ? speed : speed / 2);

    return () => clearTimeout(timeout);
  }, [subIndex, forward]);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((v) => !v), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return `${texts[index].substring(0, subIndex)}${blink ? "|" : " "}`;
};
