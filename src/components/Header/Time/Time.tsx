import dayjs from 'Dayjs'
import { useEffect, useState } from 'react';

const Time = () => {
    const [timeCurrent, setTimeCurrent] = useState(dayjs());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeCurrent(dayjs());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <time className='text-2xl text-green-700 font-bold
        transition-colors duration-900
        dark:text-green-800'>
            {timeCurrent.format('HH:mm:ss')}
        </time>
    )
}

export default Time;