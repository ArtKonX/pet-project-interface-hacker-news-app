import dayjs from 'dayjs'

const formattedDate = (time: number) => {

    const date = dayjs(time *= 1000);

    return date.format('HH:mm DD.MM.YYYY')
}

export default formattedDate