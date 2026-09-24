import { useDispatch, useSelector } from 'react-redux';
import strings from '../../assets/strings-en';
import useActionMessage from '../../hooks/useActionMessage';
import useDrops from '../../hooks/useDrops';
import { log } from '../../lib/gameSlice';
import { addResource, showResource } from '../../lib/resourceSlice';
import CooldownButton from './CooldownButton';

export default function ExploreButton() {
  const cooldown = useSelector((s) => s.data.cool_explore);
  const experience = useSelector((s) => s.resources.xp);
  const dispatch = useDispatch();
  const message = useActionMessage('msg_explore');
  const drops = useDrops('droptable_explore');

  function formatList(items) {
    const itemStrings = items.map((item) => strings[item]);
    switch (itemStrings.length) {
      case 0:
        return '';
      case 1:
        return itemStrings[0];
      case 2:
        return `${itemStrings[0]} ${strings.and} ${itemStrings[1]}`;
      default:
        itemStrings[itemStrings.length - 1] = `${strings.and} ${
          itemStrings[itemStrings.length - 1]
        }`;
        return itemStrings.join(', ');
    }
  }

  function handleExplore() {
    if (cooldown.count >= cooldown.dropAt) {
      const dropMessages = drops();
      if (dropMessages.length > 0) {
        dispatch(
          log({
            template: 'you_find',
            items: formatList(dropMessages),
          })
        );
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
