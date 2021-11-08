import { useSelector } from 'react-redux';
import ResourceList from './ResourceList';
import Log from './Log';

export default function MainPage() {
  const resources = useSelector((s) => Object.values(s.resources));

  return (
    <div className="main-page">
      <ResourceList resources={resources} />
      <Log />
    </div>
  );
}
