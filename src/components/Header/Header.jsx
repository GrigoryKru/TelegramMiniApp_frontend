import React from 'react';
import './Header.css';
import { useTelegram } from '../hooks/use-telegram';
import Button from '../Button/Button';

const Header = () => {
  const { user, onClose } = useTelegram();

  return (
    <div className={'header'}>
      <Button onClick={onClose}>Закрыть</Button>
      <span className={'username'}>{user?.username}</span>
    </div>
  );
};

export default Header;
