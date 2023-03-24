import './TimeCard.scss'
import React, {useEffect, useState} from "preact/compat";

type TimeCardProps = {
    number: Number,
    subtitle: String
}

export default function TimeCard({number, subtitle}: TimeCardProps) {

    const formatNumber = (number: Number) => {
        const numberToString = number.toString()
        if (numberToString.length < 2) return "0" + numberToString
        return numberToString;
    }

    return (
        <div class="time-card-container">
            <div class="time-card">
                <div class="top-container">
                    <div key={number} class="top">
                        {formatNumber(number)}
                    </div>
                    <div key={number} class="top top-anim">
                        {formatNumber(number)}
                    </div>
                </div>
                <div class="bottom-container">
                    <div key={number} class="bottom">
                        {formatNumber(number)}
                    </div>
                    <div key={number} class="bottom bottom-anim">
                        {formatNumber(number)}
                    </div>
                </div>
            </div>
            <div class="subtitle">{subtitle}</div>
        </div>
    )
}
