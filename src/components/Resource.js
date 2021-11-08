import strings from '../assets/strings-en';

export default function Resource({ resource }) {
  const { name, amount, rate, max, type, state } = resource;

  return (
    <div className={`resource ${state} ${type}`}>
      <strong>{strings[name]}:</strong> {amount.toFixed(2)}/{max}{' '}
      {rate !== 0 ? `(${rate.toFixed(2)}/sec)` : ''}
    </div>
  );
}
