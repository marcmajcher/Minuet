import strings from '../assets/strings-en';

export default function Resource({ resource }) {
  const { name, amount, rate, max, type, state } = resource;

  return (
    <div className={`resource ${state} ${type}`}>
      <span className="resource-name">{strings[name]}:</span>{' '}
      <span className="resource-amount">
        {amount.toFixed(2)}/{max}
      </span>{' '}
      <span className="resource-rate">
        {rate !== 0 ? `(${rate.toFixed(2)}/sec)` : ''}
      </span>
    </div>
  );
}
