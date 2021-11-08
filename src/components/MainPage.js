import { useSelector } from 'react-redux';
import ResourceList from './ResourceList';
import Log from './Log';
import ActionPanel from './ActionPanel';

export default function MainPage() {
  const resources = useSelector((s) => Object.values(s.resources));

  return (
    <div className="main-page">
      <ResourceList resources={resources} />
      <ActionPanel />
      <Log />
    </div>
  );
}
