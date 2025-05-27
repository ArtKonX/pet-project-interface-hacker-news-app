const Copyright = ({ text }: { text: string }) => {

    return (
        <div className='w-full flex justify-center text-md text-green-700
        dark:text-green-800 font-bold'>
            <span>
                {text}
            </span>
        </div>
    )
}

export default Copyright