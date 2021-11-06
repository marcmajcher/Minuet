import { useDispatch } from 'react-redux';
import { start } from '../lib/gameSlice';
import { reset } from '../lib/gameSlice';
import strings from '../assets/strings-en';

export default function Decant() {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(reset());
          dispatch(start());
        }}
      >
        {strings.btn_decant}
      </button>
    </>
  );
}
