import strings from '../../assets/strings-en';
import { useDispatch } from 'react-redux';
import { startCooldown } from '../../lib/dataSlice';

export default function CooldownButton({
  cooldown,
  cool_id,
  label_id,
  callback,
}) {
  const dispatch = useDispatch();

  return (
    <div className="btn-cooldown">
      <div
        className="btn-cooldown-bar"
        style={{ width: `${(cooldown.seconds / cooldown.max) * 100}%` }}
      />
      <button
        className="cooldown"
        disabled={cooldown.seconds > 0}
        onClick={() => {
          dispatch(startCooldown(cool_id));
          callback();
        }}
      >
        {strings[label_id]} : {Math.ceil(cooldown.seconds)}
      </button>
    </div>
  );
}
