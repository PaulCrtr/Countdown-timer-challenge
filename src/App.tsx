import './app.scss'
import React, {useEffect, useState} from "preact/compat";
import TimerCard from "./TimerCard"
import {ReactComponent as FaceBook} from "./assets/icon-facebook.svg";
import {ReactComponent as Pinterest} from "./assets/icon-pinterest.svg";
import {ReactComponent as Instagram} from "./assets/icon-instagram.svg";

export function App() {
    const subtitles = ['DAYS', 'HOURS', 'MINUTES', 'SECONDS']
    const [isInit, setIsInit] = useState(false)
    const [time, setTime] = useState([8, 23, 55, 2])

    useEffect(() => {
        const [days, hours, minutes, seconds] = time;
        if (!isInit){
            setTime([days, hours, minutes, seconds - 1])
            setIsInit(true)
        }
        const timer = setTimeout(() => {
            if (seconds > 0) {
                setTime([days, hours, minutes, seconds - 1]);
            } else if (minutes > 0) {
                setTime([days, hours, minutes - 1, 59]);
            } else if (hours > 0) {
                setTime([days, hours - 1, 59, 59]);
            } else if (days > 0) {
                setTime([days - 1, 23, 59, 59]);
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [time]);

    return (
        <div class="app">
            <div class="bg-stars">
                <div class="main-container">
                    <div class="title">WE’RE LAUNCHING SOON</div>
                    <div class="countdown-timer">
                        {time.map((e, index) => <TimerCard number={e} subtitle={subtitles[index]}/>)}
                    </div>
                </div>
            </div>
            <div class="pattern-hills">
                <div class="networks">
                    <FaceBook/><Pinterest/><Instagram/>
                </div>
            </div>
        </div>
    )
}
