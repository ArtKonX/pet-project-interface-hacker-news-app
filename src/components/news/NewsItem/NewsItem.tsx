import { Link } from 'react-router-dom';
import Stars from "./Stars/Stars";
import formattedDate from "@src/utils/formattedDate";
import { NewsDataItem } from "@src/interfaces/news";

const NewsItem = ({ ...props }: NewsDataItem) => {

    const { id, title, score, by, time } = props;

    return (
        <div className="border-3 border-green-700/90 bg-green-50
        dark:bg-green-200/60 p-4 h-63 box-border">
            <Link to={`/news/${id}`} className="text-2xl">
                <h3 className="mb-10 text-green-800 hover:text-green-800/50
                transition-colors duration-600 max-h-10 h-full">
                    {title.length > 60 ? title.slice(0, 60) + '...' : title}
                </h3>
            </Link>
            <div className="flex justify-start mb-5 pt-6">
                <Stars score={score} />
            </div>
            <div className="flex flex-col items-end text-1xs">
                <address className="mb-2">Автор: {by}</address>
                <time>Дата: {formattedDate(time)}</time>
            </div>
        </div>
    )
}

export default NewsItem