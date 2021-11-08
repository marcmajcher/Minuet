import { useDispatch, useSelector } from 'react-redux';
import { pause, unpause } from '../lib/gameSlice';
import orbit from '../assets/orbital.svg';

export default function Header() {
  const dispatch = useDispatch();
  const paused = useSelector((s) => s.game.paused);
  const frozen = useSelector((s) => s.game.frozen);

  return (
    <header>
      <h1>minuet</h1>
      <img
        className={paused ? 'orbit' : 'orbit spin'}
        src={orbit}
        alt="orbit logo"
        onClick={
          paused && !frozen
            ? () => dispatch(unpause())
            : () => dispatch(pause())
        }
      />
    </header>
  );
}
