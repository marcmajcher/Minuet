import { useSelector } from 'react-redux';
import DecantButton from './DecantButton';
import Resource from './Resource';

export default function ResourceList({ resources }) {
  const frozen = useSelector((s) => s.game.frozen);

  return (
    <div className="resource-list">
      {frozen ? (
        <DecantButton />
      ) : (
        resources.map((resource) => (
          <Resource resource={resource} key={resource.id} />
        ))
      )}
    </div>
  );
}
