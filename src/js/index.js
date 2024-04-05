//import react into the bundle
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./component/SecondsCounter.jsx";

const App = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    const [intervalId, setIntervalId] = useState(null);


    useEffect(() => {
        if(isRunning) {
            const id = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
            setIntervalId(id);
        } else {
            clearInterval(intervalId);
        }
        
        return () => clearInterval(intervalId);
    }, [isRunning]);


    const handleCountdown = (startFrom) => {
        setSeconds(startFrom);
    };

    const handleStop = () => {
        setIsRunning(false);
    }

    const handleReset = () => {
        setIsRunning(true);
        setSeconds(0);
    };

    const handleResume = () => {
        setIsRunning(true);
    }


    return (
        <div>
            <button onClick={() => handleCountdown(10)}>Countdown from 10</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleResume}>Resume</button>
            <SecondsCounter seconds={seconds} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));



//let seconds = 0;

/*setInterval(()=> {
    ReactDOM.render(
        <SecondsCounter
        seconds = {seconds}   
        />, document.querySelector("#app"));

    seconds++;

}, 1000);*/

