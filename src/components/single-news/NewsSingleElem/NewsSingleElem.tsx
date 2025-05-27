import Stars from "@src/components/news/NewsItem/Stars/Stars"
import { NewsSingleElemProps } from "@src/interfaces/news"
import formattedDate from "@src/utils/formattedDate"
import { Link } from "react-router-dom"

const NewsSingleElem = ({ ...props }: NewsSingleElemProps) => {

    const { title, url, time, by, score, commentsLength } = props

    return (
        <div className="border-3 border-green-700/90 bg-green-50
        dark:bg-green-200/60 p-4 w-full mb-6">
            <h3 className="2xl:text-3xl xs:text-2xl
            font-bold mb-5 text-green-700">
                {title}
            </h3>

            <p className="2xl:text-xl xs:text-lg text-black
            mb-10 overflow-x-scroll pb-2">
                Ссылка на новость: <Link to={url}>{url}</Link>
            </p>
            <div className="flex text-md justify-between text-gray-800 mb-4">
                <time>
                    {formattedDate(time)}
                </time>
                <span>
                    Автор: {by}
                </span>
            </div>
            <div className="flex justify-between 2xl:text-xl xs:text-lg">
                <Stars score={score} />
                {commentsLength !== 0 &&
                    <span className="ml-5 text-black">
                        💬 {commentsLength}
                    </span>}
            </div>
        </div>
    )
}

export default NewsSingleElem