import React, { useState, useEffect } from 'react';

import Chatty from './components/Chatty';
import LoginForm from './components/Login/LoginForm';
import './App.css';
// import ThreadList from './ThreadList';

const App = () => {
  const [chatty, setChatty] = useState([]);
  const [newestEventId, setNewestEventId] = useState(null);

  const winchatty = 'https://winchatty.com/v2';

  useEffect(() => {
    const getChatty = async () => {
      try {
        const response = await fetch(`${winchatty}/getChatty`);
        const data = await response.json();

        // console.log(data.threads);
        setChatty(data.threads);
      } catch (error) {
        console.log(error);
      }
    };

    getChatty();

    const getNewestEventId = async () => {
      const response = await fetch(`${winchatty}/getNewestEventId`);
      const data = await response.json();
      console.log('newest event, ', data);
      // console.log(data.eventId);
      setNewestEventId(data.eventId);
    };

    getNewestEventId();

    // const waitForEvent = async () => {
    //   const { data } = await winchatty.get('/waitForEvent', {
    //     params: {
    //       lastEventId: newestEventId,
    //     },
    //   });
    // };

    // waitForEvent();
  }, [newestEventId]);

  // return <ThreadList posts={posts} />;
  return (
    <React.Fragment>
      <LoginForm />
      <Chatty posts={chatty} />
    </React.Fragment>
  );
};

export default App;
