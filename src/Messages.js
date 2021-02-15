import React from 'react';
import MessageBox from "./MessageBox"
import "./style/style.css";


const Messages = ({ message }) => {
    return(
        <div className="message container">
            {message.map((msg) => {
                return <MessageBox text={msg.text} key={msg.id}/>
            })}
        </div>
    );
}

export default Messages;