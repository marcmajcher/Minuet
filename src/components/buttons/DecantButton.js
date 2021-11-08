import { useDispatch, useSelector } from 'react-redux';
import { log, decant } from '../../lib/gameSlice';
import strings from '../../assets/strings-en';
import { defaultResrouces, showResource } from '../../lib/resourceSlice';

export default function DecantButton() {
  const dispatch = useDispatch();
  const stability = useSelector((s) => s.resources.stability.rate);
  return (
    <button
      className="button-primary"
      onClick={() => {
        dispatch(defaultResrouces);
        dispatch(decant());
        dispatch(showResource('stability'));
        dispatch(
          log({
            template: 'msg_decant',
            colonist: Date.now().toString().substr(-8),
            stability: stability < 0 ? 'unstable' : 'stable',
          })
        );
      }}
    >
      {strings.btn_decant}
    </button>
  );
}
