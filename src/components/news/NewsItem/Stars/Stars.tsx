const Stars = ({ score }: { score: number }) => {

    return (
        <span className={`2xl:text-xl xs:text-lg ${score > 10 ?
            'text-green-600' :
            score <= 10 && score > 6 ?
                'text-yellow-400' :
                'text-red-600'}`}>
            <span className="text-black">
                Рейтинг:
            </span> ★ {score}
        </span>
    )
}

export default Stars