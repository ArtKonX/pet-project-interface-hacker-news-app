const InfoMessage = ({ text, isMinWidth }: { text: string, isMinWidth: boolean }) => {

    return (
        <div className={`${isMinWidth ? 'flex justify-end' :
            'flex justify-center w-full'}`}>
            <div className={`mt-4
        p-5 border-3 border-green-700/90
        flex justify-center items-center
        mb-4 text-xl font-bold ${isMinWidth ? 'w-4/5 bg-gray-400/18' :
                    'w-full bg-green-50'}`}>
                {text}
            </div>
        </div>
    )
}

export default InfoMessage