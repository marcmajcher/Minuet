import { useDispatch, useSelector } from 'react-redux';
import { incrementActionMessage, shiftActionMessage } from '../lib/dataSlice';
import { log } from '../lib/gameSlice';

export default function useActionMessage(key) {
  const dispatch = useDispatch();
  const data = useSelector((s) => s.data[key]);

  return function () {
    if (data.active) {
      const message = data.messages[0];
      if (data.count >= message.after && Math.random() < message.chance) {
        dispatch(log(message.text));
        dispatch(shiftActionMessage(key));
      }
      dispatch(incrementActionMessage(key));
    }
  };
}
