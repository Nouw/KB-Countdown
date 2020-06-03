import React, { useEffect, useState } from 'react';
import './Countdown.css';
import {Redirect} from 'react-router-dom';

export default function Main() {
    const calculateTimeLeft = () => {
        //Shit is a bit retarded with calculation difference???
        const difference = +new Date(2020, 5, 18, 20, 0, 0) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach(interval => {
        timerComponents.push(
            <span>
        {timeLeft[interval]}{""}
      </span>
        );

    });

    return (
        <div className="mainBG">
            {/*Hoi, ik zie je wel kijken! Helaas is hier niets te vinden. Ik zou je tijd niet verspillen aan het zoeken naar bugs/security issues
            aangezien het een SPA is en er toch niks te zoeken
            */}
            {timerComponents.length ?
                <div className="flex-center container-fluid">
                    <div className="row" >
                        <div className="col content">
                            <div className="title">KB Onthulling:</div>
                            <div className="clock-container">
                                <div className="clock-col">
                                    <p className="clock-day clock-timer">
                                        {timerComponents[0]}
                                    </p>
                                    <p className="clock-label">
                                        Dagen
                                    </p>
                                </div>
                                <div className="clock-col">
                                    <p className="clock-hours clock-timer">
                                        {timerComponents[1]}
                                    </p>
                                    <p className="clock-label">
                                        Uren
                                    </p>
                                </div>
                                <div className="clock-col">
                                    <p className="clock-minutes clock-timer">
                                        {timerComponents[2]}
                                    </p>
                                    <p className="clock-label">
                                        Minuten
                                    </p>
                                </div>
                                <div className="clock-col">
                                    <p className="clock-seconds clock-timer">
                                        {timerComponents[3] ?
                                            timerComponents[3] : 0
                                        }
                                    </p>
                                    <p className="clock-label">
                                        Seconden
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> :
                <Redirect to="/reveal"/>
            }
        </div>
    );
}