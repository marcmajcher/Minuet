import ResourceList from './ResourceList';
import Log from './Log';
import ActionPanel from './ActionPanel';

export default function MainPage() {

  return (
    <div className="main-page">
      <ResourceList />
      <ActionPanel />
      <Log />
    </div>
  );
}
