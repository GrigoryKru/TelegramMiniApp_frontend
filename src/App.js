import { useEffect } from 'react';
import './App.css';
import { useTelegram } from '../../hooks/use-telegram';

function App() {
  useEffect(() => {
    useTelegram.tg.ready();
  }, []);

  return (
    <div className="App">
      <button onClick={useTelegram.onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
