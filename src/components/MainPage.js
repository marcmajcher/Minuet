import { useSelector } from 'react-redux';
import ResourceList from './ResourceList';

export default function MainPage() {
  const resources = useSelector((s) => Object.values(s.resources));
  return (
    <>
      <ResourceList resources={resources} />
    </>
  );
}
