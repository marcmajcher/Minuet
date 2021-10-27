import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { pause, start } from '../lib/actions';

export function useBeat(fps, callback) {
  const ms = 1000 / fps;
  const dispatch = useDispatch();

  const intervalRef = useRef();

  function startBeat() {
    intervalRef.current = setInterval(() => callback(ms), ms);
    dispatch(start());
  }

  function pauseBeat() {
    clearInterval(intervalRef.current);
    dispatch(pause());
  }

  useEffect(() => {
    startBeat();
    return pauseBeat()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return { startBeat, pauseBeat };
}
