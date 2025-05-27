import { NewsDataItem } from "@src/interfaces/news"
import NewsItem from "../NewsItem/NewsItem"

const NewsItems = ({ dataNews }: { dataNews: NewsDataItem[] }) => {

    return (
        <ul className="flex flex-wrap justify-center mb-4">
            {dataNews.map(newsItem => (
                <li key={newsItem.id} className="mb-10 last:mb-0 w-full
                2xl:mx-10 2xl:max-w-132 xs:max-w-full">
                    <NewsItem {...newsItem} />
                </li>
            ))}
        </ul>
    )
}

export default NewsItems