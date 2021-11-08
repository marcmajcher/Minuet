import { useSelector } from 'react-redux';
import Resource from './Resource';

export default function ResourceList({ resources }) {
  const numDecants = useSelector((s) => s.game.decants);
  return (
    <div className="resource-list">
      {numDecants > 0
        ? resources.map((resource) => (
            <Resource resource={resource} key={resource.id} />
          ))
        : '[RESOURCES UNAVAILABLE]'}
    </div>
  );
}
