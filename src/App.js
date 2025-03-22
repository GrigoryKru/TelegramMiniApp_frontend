import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './components/hooks/use-telegram.js';
import Header from './components/Header/Header.jsx';

function App() {
  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
