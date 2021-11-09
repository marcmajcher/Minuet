import { useDispatch, useSelector } from 'react-redux';
import useActionMessage from '../../hooks/useActionMessage';
import useDrops from '../../hooks/useDrops';
import { log } from '../../lib/gameSlice';
import { addResource, showResource } from '../../lib/resourceSlice';
import CooldownButton from './CooldownButton';

export default function ExploreButton() {
  const cooldown = useSelector((s) => s.data.cool_explore);
  const exploreCount = useSelector((s) => s.data.msg_explore.count);
  const experience = useSelector((s) => s.resources.xp);
  const dispatch = useDispatch();
  const message = useActionMessage('msg_explore');
  const drops = useDrops('droptable_explore');

  function handleExplore() {
    if (exploreCount > 3) {
      // TK magic number
      const dropMessage = drops();
      if (dropMessage) {
        dispatch(log(dropMessage));
      }
    }
    dispatch(addResource({ resource: 'xp', amount: 1 }));
    if (experience.state === 'hidden') {
      dispatch(showResource('xp'));
    }

    message();
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
