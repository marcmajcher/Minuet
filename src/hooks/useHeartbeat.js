import { useRef } from 'react';

export function useBeat(fps, callback) {
  const requestRef = useRef();
  const lastTimeRef = useRef(window.performance.now());
  const runningRef = useRef(false);
  const tickLength = 1000 / fps;

  console.log('Running:', runningRef.current);

  function tick(ms) {
    if (runningRef.current) {
      const timeElapsed = ms - lastTimeRef.current;
      if (timeElapsed > tickLength) {
        lastTimeRef.current = ms - (timeElapsed % tickLength);
        callback(timeElapsed);
      }
    }
    requestRef.current = requestAnimationFrame(tick);
  }

  const beat = {
    start: () => {
      requestRef.current = requestAnimationFrame(tick);
      runningRef.current = true;
    },
    pause: () => {
      runningRef.current = false;
    },
    running: () => runningRef.current,
  };

  return beat;
}
