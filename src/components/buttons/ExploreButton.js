import { useDispatch, useSelector } from 'react-redux';
import { log } from '../../lib/gameSlice';
import { addResource, showResource } from '../../lib/resourceSlice';
import CooldownButton from './CooldownButton';

export default function ExploreButton() {
  const cooldown = useSelector((s) => s.data.cool_explore);
  const experience = useSelector((s) => s.resources.xp);
  const dispatch = useDispatch();

  function handleExplore() {
    dispatch(log('Exploring....'));
    dispatch(addResource({ resource: 'xp', amount: 1 }));
    if (experience.state === 'hidden') {
      dispatch(showResource('xp'));

    }
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
