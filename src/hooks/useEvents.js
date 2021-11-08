import { useDispatch } from 'react-redux';
import { pause } from '../lib/gameSlice';

export default function useEvents() {
  const dispatch = useDispatch();
  
  return (resources) => {
    if (resources.stability.amount <= 0) {
      console.log('oooo you dead');
      dispatch(pause());
    }
  };
}
