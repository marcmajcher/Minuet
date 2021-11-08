import { useDispatch } from 'react-redux';
import { start } from '../lib/gameSlice';
import { reset, log } from '../lib/gameSlice';
import strings, { printString } from '../assets/strings-en';

export default function DecantButton() {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(reset());
        dispatch(start());
        dispatch(
          log(
            printString('msg_decant', {
              colonist: '0001',
              stability: 'unstable',
            })
          )
        );
      }}
    >
      {strings.btn_decant}
    </button>
  );
}
