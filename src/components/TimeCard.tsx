import './TimeCard.scss'
import React from "preact/compat";

type TimeCardProps = {
    number: String,
    subtitle: String
}

export default function TimeCard({number, subtitle}: TimeCardProps) {
    return (
        <div class="time-card-container">
            <div class="time-card">
                <div class="top">
                    {number}
                </div>
                <div class="bottom">
                    {number}
                </div>
            </div>
            <div class="subtitle">{subtitle}</div>
        </div>
    )
}
