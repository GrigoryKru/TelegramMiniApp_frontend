import React from 'react';
import { useTelegram } from './components/hooks/use-telegram';

const Header = () => {
const {user, onClose} = useTelegram();

  return (
    <div className={'header'}>
      <button onClick={onClose}>Закрыть</button>
      <span className={'username'}>{user?.username}</span>
    </div>
  );
};

export default Header;
