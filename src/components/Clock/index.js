import { useEffect } from "react";
import { useState } from "react";
import React from 'react';


export const Clock = () => {

    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [hour, setHour] = useState(0);

    useEffect(() => {

        console.log('re-rendeing');

        setInterval(() => {
            setSecond(counter => counter + 1);
        }, 1000);
    
      }, []);

    return (


        <div>
            { console.log('re-rendeing')    }

            <h1>  
                <span> {hour < 10 ? `0 ${hour}` : `${hour}`} </span> : 
                <span> {minute < 10 ? `0 ${minute}` : `${minute}`} </span> : 
                <span> {second < 10 ? `0 ${second}` : `${second}`} </span> 
            </h1>

            <button>  Increase </button>
        </div>
    );
};

