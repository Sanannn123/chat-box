import React from 'react';
import "./style/style.css";

const InputBox = ({message, setMessage}) => {
    const submitHandler = (e) => {
       setMessage([
           ...message,
           {
               text: e.target.value,
               id: Math.random() * 999,
           }
       ]);
       console.log(message);
       e.target.value=""
    };

    return (
    <div className="container">

        <form 
        onSubmit={(e) => {e.preventDefault()}}>
            <input 
            placeholder="Say something nice :)"
            type="text"
            onKeyDown={(e)=>{
                if(e.key === "Enter") {
                    submitHandler(e);
                }
            }}/>
            
        </form>
    </div>
    )
}

export default InputBox