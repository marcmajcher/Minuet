import { useDispatch, useSelector } from 'react-redux';
import useFormat from './hooks/useFormat';
import { setResoruceRate } from './lib/actions';

export default function TestResource() {
  const dispatch = useDispatch();
  const format = useFormat();
  const dummyResource = useSelector((s) => s.resources.dummyResource);

  function addRate() {
    dispatch(setResoruceRate('dummyResource', dummyResource.rate + 1));
  }

  return (
    <div>
      <div>
        DummyResource: {format(dummyResource.amount)} ({format(dummyResource.rate)}/sec)
      </div>
      <button onClick={addRate}>+1/sec</button>
    </div>
  );
}
