import React, {useEffect, useRef} from "preact/compat";

type TimerCardProps = {
    number: Number,
    subtitle: String
}

export default function TimerCard({number, subtitle}: TimerCardProps) {

    const prevNumber = usePrevious(number)

    const triggerAnim = typeof prevNumber !== "undefined" && prevNumber != number

    return (
        <div class="timer-card-container">
            <div class="timer-card">
                <div class="top-container">
                    <div class="top">
                        {formatNumber(number)}
                    </div>
                    {triggerAnim && <div key={number} class="top top-anim">
                        {formatNumber(prevNumber)}
                    </div>}
                </div>
                <div class="bottom-container">
                    {triggerAnim && <div class="bottom">
                        {formatNumber(prevNumber)}
                    </div>}
                    <div key={number} class={`bottom ${triggerAnim ? 'bottom-anim' : ''}`}>
                        {formatNumber(number)}
                    </div>
                </div>
            </div>
            <div class="subtitle">{subtitle}</div>
        </div>
    )
}

const formatNumber = (number: Number | undefined) => {
    if (number) {
        const numberToString = number.toString()
        if (numberToString.length < 2) return "0" + numberToString
        return numberToString;
    }
    return '00'
}

function usePrevious<T>(value: T): T | undefined {
    const ref = useRef<T>();
    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
}
