const Stars = ({ score }: { score: number }) => {

    return (
        <span className={`2xl:text-xl xs:text-lg ${score > 10 ?
            'text-green-600' :
            score <= 10 && score > 6 ?
                'text-yellow-500' :
                'text-red-700'}`}>
            <span className="text-black">
                Рейтинг:
            </span> ★ {score}
        </span>
    )
}

export default Stars