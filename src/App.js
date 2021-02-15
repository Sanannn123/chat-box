import React, { useState } from 'react';
import './App.css';
import InputBox from './InputBox';
import Messages from "./Messages"
import "./style/style.css"

const App = () => {
  const [message, setMessage] = useState([]);

  return (
    <div className="app">
    <h1>Send Message</h1>
      <InputBox message={message} setMessage={setMessage}/>
      <Messages message={message} />
    </div>
  );
}

export default App;
