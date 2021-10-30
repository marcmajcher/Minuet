export default function Resource({resource}) {
  const {name, amount, rate, max, state} = resource;

  return (
    <div className={`resource ${state}`}>
      {name}: {amount.toFixed(2)}/{max} ({rate.toFixed(2)}/sec)
    </div>
  );
}
