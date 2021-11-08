import { useSelector } from 'react-redux';
import DecantButton from './DecantButton';

export default function ActionPanel() {
  const frozen = useSelector((s) => s.game.frozen);

  return <div className="action-panel">{frozen ? <DecantButton /> : ''}</div>;
}
