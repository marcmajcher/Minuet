import { useSelector } from 'react-redux';
import Resource from './Resource';
import strings from '../assets/strings-en';

export default function ResourceList() {
  const numDecants = useSelector((s) => s.game.decants);
  const resources = useSelector((s) => Object.values(s.resources));

  return (
    <div className="resource-list">
      {numDecants > 0
        ? resources.map((resource) => (
            <Resource resource={resource} key={resource.id} />
          ))
        : strings.msg_no_resources}
    </div>
  );
}
