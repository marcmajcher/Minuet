import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAllResources } from '../lib/resourceSlice';
import useEvents from './useEvents';

export function useHeartbeat() {
  const dispatch = useDispatch();
  const events = useEvents();
  const resources = useSelector((s) => s.resources);
  const paused = useSelector((s) => s.game.paused);
  const fps = useSelector((s) => s.game.fps);
  const ms = fps > 0 ? 1000 / fps : Number.MAX_VALUE;
  const savedCallback = useRef(() => {
    dispatch(updateAllResources(ms));
  });

  useEffect(() => {
    function tick() {
      savedCallback.current(ms);
      events(resources)
    }
    if (fps > 0 && !paused) {
      let id = setInterval(tick, ms);
      return () => clearInterval(id);
    }
  }, [fps, ms, paused, events, resources]);
}
