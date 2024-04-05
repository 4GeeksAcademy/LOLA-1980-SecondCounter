import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaClock } from "react-icons/fa";
import Digito from './Digito';


const SecondsCounter = (props) => {
    let segundos = props.seconds;
    let digitOne = segundos % 10; //segundos / 1
    let digitTwo = Math.trunc(segundos / 10) % 10; //Math.floor(segundos / 10) % 10;
    let digitThree = Math.trunc(segundos / 100 ) % 10; //Math.floor(segundos / 100) % 10;
    let digitFour = Math.trunc(segundos / 1000 ) % 10; //Math.floor(segundos / 1000) % 10;
    let digitFive = Math.trunc(segundos / 10000 ) % 10; //Math.floor(segundos / 10000) % 10;
    let digitSix = Math.trunc(segundos / 100000 ) % 10; //Math.floor(segundos / 100000) % 10;

    return(
        <div className="d-flex justify-content-around container text-center mt-5 display-1 bg-black">
            <FaClock className="bg-negro border-negro text-white rounded-4 size-clock p-3" />
            <Digito number={digitSix} />
            <Digito number={digitFive} />
            <Digito number={digitFour} />
            <Digito number={digitThree} />
            <Digito number={digitTwo} />
           <Digito number={digitOne} /> 
        </div>
    );
}

export default SecondsCounter;