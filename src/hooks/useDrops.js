import { useDispatch, useSelector } from 'react-redux';
import { removeFirstResourceMessage } from '../lib/dataSlice';
import { log } from '../lib/gameSlice';
import { addResource } from '../lib/resourceSlice';
import { rollBetween } from './useRandom';

export default function useDrops(dropKey) {
  const dispatch = useDispatch();
  const dropTable = useSelector((s) => s.data[dropKey]);
  const data = useSelector((s) => s.data);

  return function () {
    const dropMessages = [];
    for (const dropItem in dropTable) {
      if (Math.random() < dropTable[dropItem]) {
        const item = data[dropItem];
        if (item.first) {
          dispatch(log(item.first));
          dispatch(removeFirstResourceMessage(dropItem));
        } else {
          dropMessages.push(item.description);
          let amount = rollBetween(item.min, item.max);
          if (item.limit) {
            amount = Math.min(amount, data[item.limit].amount);
          }
          dispatch(addResource({ resource: item.resource, amount }));
        }
      }

      return dropMessages.join(', ');
    }
  };
}
