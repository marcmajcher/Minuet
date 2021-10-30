import Resource from './Resource';

export default function ResourceList({resources}) {
  return <div>
    {resources.map(resource => <Resource resource={resource} key={resource.id} />)}
  </div>
}