import './css/App.css';
import { useBeat } from './hooks/useHeartbeat';
import Header from './Header';
import TestResource from './TestResource';
import { useDispatch, useSelector } from 'react-redux';
import { updateAllResources } from './lib/actions';

function App() {
  const dispatch = useDispatch();
  const paused = useSelector((s) => s.paused);

  const { startBeat, pauseBeat } = useBeat(5, (ms) => {
    dispatch(updateAllResources(ms));
  });

  return (
    <div className="container">
      <Header />
      Running: {paused ? 'nope.' : 'yup!'}
      <TestResource />
      {paused ? (
        <button onClick={startBeat}>Start</button>
      ) : (
        <button onClick={pauseBeat}>Pause</button>
      )}
    </div>
  );
}

export default App;
