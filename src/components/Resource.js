export default function Resource({resource}) {
  const {name, amount, rate, max, type, state} = resource;

  return (
    <div className={`resource ${state} ${type}`}>
      {name}: {amount.toFixed(2)}/{max} ({rate.toFixed(2)}/sec)
    </div>
  );
}
