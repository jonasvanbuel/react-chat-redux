import React from 'react';

import Header from './header';
import ChannelList from './channel_list';
import MessageList from '../containers/message_list';

const App = () => {
  return (
    <div className="app">
      <Header />
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
