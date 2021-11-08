import { useSelector } from 'react-redux';

export default function Log() {
  const entries = useSelector((s) => s.game.logEntries);

  return (
    <div className="log-entries">
      {entries && entries.map((entry) => (
        <p key={Math.random()}>{entry}</p>
      ))}
    </div>
  );
}
