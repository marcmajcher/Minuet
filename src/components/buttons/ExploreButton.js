import { useDispatch, useSelector } from 'react-redux';
import { log } from '../../lib/gameSlice';
import CooldownButton from './CooldownButton';

export default function ExploreButton() {
  const cooldown = useSelector((s) => s.data.cool_explore);
  const dispatch = useDispatch();

  function handleExplore() {
    dispatch(log('Exploring....'));
  }

  return (
    <CooldownButton
      cooldown={cooldown}
      cool_id="cool_explore"
      label_id="btn_explore"
      callback={handleExplore}
    />
  );
}
