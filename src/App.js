import './styles/App.scss';
import { useHeartbeat } from './hooks/useHeartbeat';
import MainPage from './components/MainPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  useHeartbeat();  

  return (
    <div className="container">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
