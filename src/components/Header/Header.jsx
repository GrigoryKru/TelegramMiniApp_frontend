import React from 'react';
import { useTelegram } from './components/hooks/use-telegram';

const header = () => {

  return (
    <div className={'header'}>
      <button onClick={useTelegram.onClose}>Закрыть</button>
      <span className={'username'}>
        {useTelegram.user?.username}
      </span>
    </div>
  );
};

export default header;
