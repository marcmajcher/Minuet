import './css/App.css';
import { useBeat } from './hooks/useHeartbeat';
import Header from './Header';
import TestResource from './TestResource';
import { useDispatch } from 'react-redux';
import { updateAllResources } from './lib/actions';

function App() {
  const dispatch = useDispatch();
  const beat = useBeat(4, (ms) => {
    // console.log(`Beat size ${t}`);
    dispatch(updateAllResources(ms));
  });

  return (
    <div className="container">
      <Header />
      Running: {beat.running() ? 'yup!' : 'nope.'}
      <TestResource />
      {/* {beat.running() ? ( */}
      <button onClick={beat.pause}>Pause</button>
      {/* ) : ( */}
      <button onClick={beat.start}>Start</button>
      {/* )} */}
    </div>
  );
}

export default App;
