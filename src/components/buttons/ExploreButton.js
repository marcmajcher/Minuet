import { log } from '../../lib/gameSlice';
import strings from '../../assets/strings-en';
import { useDispatch } from 'react-redux';

export default function ExploreButton() {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(log('Exploring...'));
      }}
    >
      {strings.btn_explore}
    </button>
  );
}
