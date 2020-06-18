import React, { useEffect, useState } from 'react';
import ReactPlayer from "react-player";
import './Countdown.css';
import Ice from '../images/ice.jpeg';
import {Alert} from 'react-bootstrap';

export default function Reveal() {
    const [valid, setValid] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        //Check if user isn't changing client time.
        fetch('/api/date')
            .then(response => response.json())
            .then((data) => {
                const timeDifference = (new Date().getTime() - new Date(data).getTime()) / 1000;
                if(timeDifference > 0 && timeDifference < 1 && +new Date(2020, 5, 18, 20, 30, 0) - +new Date() < 0) {
                    setValid(true);
                    setLoading(false);
                } else {
                    console.log('Tijd wordt serverside gecheckt, maar goed geprobeerd!')
                    setValid(false);
                    setLoading(false);
                }
            })
    })
    if(isLoading) {
        return (
            <div>
                isLoading
            </div>
        )
    } else {
        if(valid) {
            return (
                <div className="flex-center container-fluid">
                    <Alert variant="warning">
                        Let op! De video start zonder geluid. Klik op de megafoon om te unmuten!
                    </Alert>
                    <div className="row" >
                        <div className="col content">
                            <ReactPlayer className="reveal-video" url="https://www.youtube.com/watch?v=cWrIyLNGLdU&feature=youtu.be" controls playing muted
                                         config={{ file: { attributes: {
                                        autoPlay: true,
                                        muted: true
                                    }}}}
                            />

                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <h1>Trek je ICE</h1>
                    <img src={Ice} alt="ICE"/>
                </div>
            )
        }
    }
}

