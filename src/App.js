import './css/App.css';
import { useHeartbeat } from './hooks/useHeartbeat';
import MainPage from './MainPage';

function App() {
  useHeartbeat();

  return <MainPage />;
}

export default App;
