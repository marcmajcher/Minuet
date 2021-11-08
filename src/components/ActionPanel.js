import { useSelector } from 'react-redux';
import DecantButton from './buttons/DecantButton';
import ExploreButton from './buttons/ExploreButton';

export default function ActionPanel() {
  const frozen = useSelector((s) => s.game.frozen);

  return <div className="action-panel">
    {frozen ? <DecantButton /> : <ExploreButton />}
    </div>;
}
