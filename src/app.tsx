import './app.scss'
import React, {useState, useEffect} from "preact/compat";
import TimeCard from "./TimeCard"
import {ReactComponent as FaceBook} from "./assets/icon-facebook.svg";
import {ReactComponent as Pinterest} from "./assets/icon-pinterest.svg";
import {ReactComponent as Instagram} from "./assets/icon-instagram.svg";

export function App() {
    const subtitles = ['DAYS', 'HOURS', 'MINUTES', 'SECONDS']

    const [time, setTime] = useState([8, 23, 55, 2])

    useEffect(() => {
        const timer = setTimeout(() => {
            const [days, hours, minutes, seconds] = time;
            if (seconds > 0) {
                setTime([days, hours, minutes, seconds - 1]);
            } else {
                if (minutes > 0) {
                    setTime([days, hours, minutes - 1, 59]);
                } else {
                    if (hours > 0) {
                        setTime([days, hours - 1, 59, 59]);
                    } else {
                        if (days > 0) {
                            setTime([days - 1, 23, 59, 59]);
                        }
                    }
                }
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
                        {time.map((e, index) => <TimeCard number={e} subtitle={subtitles[index]}/>)}
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
