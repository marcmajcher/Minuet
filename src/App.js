import { useEffect } from 'react';
import './css/App.css';
import { useBeat } from './hooks/useHeartbeat';

function App() {
  const beat = useBeat(4, (t) => {
    console.log(`Beat size ${t}`);
  });

  useEffect(() => {
    beat.start();
    setTimeout(() => {
      beat.stop();
    }, 3000);
  });

  return <div className="App">beat</div>;
}

export default App;
