import React, { useState, useEffect } from 'react';
import './CountdownBanner.css'

const EventCountdown = ({ initialDays = 0, initialHours = 0, initialMinutes = 0, initialSeconds = 0 }) => {
    const [days, setDays] = useState(initialDays);
    const [hours, setHours] = useState(initialHours);
    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        const countdown = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else if (seconds === 0) {
                if (minutes > 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } else if (minutes === 0) {
                    if (hours > 0) {
                        setHours(hours - 1);
                        setMinutes(59);
                        setSeconds(59);
                    } else if (hours === 0) {
                        if (days > 0) {
                            setDays(days - 1);
                            setHours(23);
                            setMinutes(59);
                            setSeconds(59);
                        } else {
                            clearInterval(countdown);
                        }
                    }
                }
            }
        }, 1000);

        return () => clearInterval(countdown);
    }, [days, hours, minutes, seconds]);

    return (
        <div className='Cou'>
            <div className="Time">
                <p>{days < 10 ? `0${days}` : days}  Days</p>
            </div>
            <div className="Time">
                <p>{hours < 10 ? `0${hours}` : hours} Hours</p>
            </div>
            <div className="Time">
                <p>{minutes < 10 ? `0${minutes}` : minutes} Minutes</p>
            </div>
            <div className="Time">
                <p>{seconds < 10 ? `0${seconds}` : seconds} Seconds</p>
            </div>
        </div>
    );
};

export default EventCountdown;