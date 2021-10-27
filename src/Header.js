import { useDispatch, useSelector } from 'react-redux';
import { pause, unpause } from './lib/gameSlice';
import orbit from './assets/orbital.svg';

export default function Header() {
  const dispatch = useDispatch();
  const paused = useSelector((s) => s.game.paused);

  return (
    <nav>
      <h1>minuet</h1>
      <img
        className={paused ? 'orbit' : 'orbit spin'}
        src={orbit}
        alt="orbit logo"
        onClick={paused ? () => dispatch(unpause()) : () => dispatch(pause())}
      />
    </nav>
  );
}
