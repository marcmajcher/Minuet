import { useDispatch, useSelector } from 'react-redux';
import { setHeartbeat } from '../lib/actions';
const RES = 100;
const MS = 1000;
const DEBUG = false;

export function useBeat(fps, callback) {
  const dispatch = useDispatch();
  const heartBeat = useSelector((s) => s.heartBeat);

  if (heartBeat) {
    return heartBeat;
  }

  let running;
  let frameCount;
  let interval;
  let then;
  let now;
  let timeElapsed;
  let startTime;

  function tick(t) {
    if (running) {
      now = t;
      timeElapsed = now - then;
      if (timeElapsed > interval) {
        then = now - (timeElapsed % interval);

        const timeSinceStart = now - startTime;
        const currentFps =
          Math.round((MS / (timeSinceStart / ++frameCount)) * RES) / RES;

        if (DEBUG) {
          console.log(
            `Elapsed time: ${
              Math.round((timeSinceStart / MS) * RES) / RES
            } secs @ ${currentFps} fps`
          );
        }

        callback(timeElapsed, timeSinceStart, currentFps);
      }
      requestAnimationFrame(tick);
    }
  }

  const beat = {
    reset: function () {
      frameCount = 0;
      running = false;
    },
    start: function () {
      interval = MS / fps;
      then = window.performance.now();
      startTime = then;
      running = true;
      tick();
    },
    pause: function () {
      running = false;
    },
    stop: function () {
      this.reset();
    },
  };
  beat.reset();
  dispatch(setHeartbeat(beat));
  return beat;
}
