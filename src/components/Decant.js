import { useDispatch } from 'react-redux';
import { start } from '../lib/gameSlice';
import strings from '../assets/strings-en'

export default function Decant() {
  const dispatch = useDispatch();
  return (
    <>
      <h2>{strings.msg_decant}</h2>
      <button onClick={() => dispatch(start())}>{strings.btn_decant}</button>
    </>
  );
}
