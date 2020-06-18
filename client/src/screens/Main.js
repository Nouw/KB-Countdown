import React, { useEffect, useState } from 'react';
import './Countdown.css';
import {Redirect} from 'react-router-dom';
import {Alert} from 'react-bootstrap';

export default function Main() {
    const calculateTimeLeft = () => {
        //Shit is a bit retarded with calculation difference???
        const difference = +new Date(2020, 5, 18, 20, 30, 0) - +new Date();
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
            {timerComponents.length ?
                <div className="flex-center container-fluid">
                    <Alert variant="danger">
                        <h4>Feitjes over het KB:</h4>
                    { +new Date(2020, 5, 17, 13, 0, 0) - +new Date() < 0 ?
                        <p>
                            - De gemiddelde schoenmaat van het KB is 42.8
                        </p> :
                        <p> - Er zijn momenteel geen feitjes om te weergeven</p>
                    }
                    { +new Date(2020, 5, 17, 18, 0, 0) - +new Date() < 0 ?
                        <p>
                            - De gemiddelde lengte van het KB is 1.85
                        </p> :
                        <p/>
                    }
                    { +new Date(2020, 5, 17, 20, 0, 0) - +new Date() < 0 ?
                        <p>
                            - De gemiddelde leeftijd van het KB is 20.8
                        </p> :
                        <p/>
                    }
                    { +new Date(2020, 5, 18, 12, 0, 0) - +new Date() < 0 ?
                        <p>
                            - Er zitten vier vrouwen en twee mannen in het KB
                        </p> :
                        <p/>
                    }
                    { +new Date(2020, 5, 18, 16, 0, 0) - +new Date() < 0 ?
                        <p>
                            - Vier van de KBers zijn opgegroeid in de regio Utrecht
                        </p> :
                        <p/>
                    }
                    { +new Date(2020, 5, 18, 19, 55, 0) - +new Date() < 0 ?
                        <p>
                            - Het KB heeft in de volgende commissies gezeten: WeekendCie, GalaCie, FeestCie, Beachie, PR
                        </p> :
                        <p/>
                    }
                    </Alert>
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