import './app.scss'
import React, {useState} from "preact/compat";
import TimeCard from "./components/TimeCard"

export function App() {
    const subtitles = ['DAYS', 'HOURS', 'MINUTES', 'SECONDS']
    const [time, setTime] = useState(['08', '23', '55', '41'])

    return (
        <div class="app-background">
            <div class="bg-stars">
                <div class="main-container">
                    <div class="title">WE’RE LAUNCHING SOON</div>
                    <div class="timer">
                        {time.map((e, index) => <TimeCard number={e} subtitle={subtitles[index]}/>)}
                    </div>
                </div>
            </div>
            <div class="pattern-hills"/>
        </div>
    )
}
