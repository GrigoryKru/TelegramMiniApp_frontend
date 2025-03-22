import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './components/hooks/use-telegram.js';
import Header from './components/Header/Header.jsx';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList.jsx';
import Form from './components/Form/Form.jsx';

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={'form'} element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
