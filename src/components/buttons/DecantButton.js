import { useDispatch, useSelector } from 'react-redux';
import { log, decant, setColonistId } from '../../lib/gameSlice';
import { setDefaultResources, showResource } from '../../lib/resourceSlice';
import strings from '../../assets/strings-en';
import { resetCooldowns } from '../../lib/dataSlice';

export default function DecantButton() {
  const dispatch = useDispatch();
  const stability = useSelector((s) => s.resources.stability.rate);
  const colonistId = Date.now().toString().substr(-8);

  return (
    <button
      className="button-primary"
      onClick={() => {
        dispatch(setDefaultResources());
        dispatch(resetCooldowns());
        dispatch(decant());
        dispatch(showResource('stability'));
        dispatch(setColonistId(colonistId));
        dispatch(
          log({
            template: 'msg_decant',
            colonist: colonistId,
            stability: stability < 0 ? 'HIGH' : 'none',
          })
        );
      }}
    >
      {strings.btn_decant}
    </button>
  );
}
