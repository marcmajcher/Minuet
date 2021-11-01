import './css/App.css';
import { useHeartbeat } from './hooks/useHeartbeat';
import MainPage from './components/MainPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { useSelector } from 'react-redux';
import Decant from './components/Decant';

function App() {
  useHeartbeat();
  const gameState = useSelector((s) => s.game.gameState);
  

  return (
    <div className="container">
      <Header />
      {gameState === 'decant' ? <Decant /> : <MainPage />}
      <Footer />
    </div>
  );
}

export default App;
