import { useDispatch, useSelector } from 'react-redux';
import { setResourceRate } from './lib/resourceSlice';

export default function TestResource() {
  const dispatch = useDispatch();
  const dummyResource = useSelector((s) => s.resources.dummyResource);

  function addRate() {
    dispatch(
      setResourceRate({
        resource: 'dummyResource',
        rate: dummyResource.rate + 1,
      })
    );
  }

  return (
    <div>
      <div>
        DummyResource: {dummyResource.amount.toFixed(2)} (
        {dummyResource.rate.toFixed(2)}/sec)
      </div>
      <button onClick={addRate}>+1/sec</button>
    </div>
  );
}
