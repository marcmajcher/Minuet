import Resource from './Resource';

export default function ResourceList({resources}) {
  return <div className="resource-list">
    {resources.map(resource => <Resource resource={resource} key={resource.id} />)}
  </div>
}