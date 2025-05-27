import { CommentData } from "@src/interfaces/comments";
import formattedDate from "@src/utils/formattedDate";
import parse from 'html-react-parser';

const CommentItem = ({ ...props }: CommentData) => {

    const { isKids, by, text, time, isFirst } = props;

    return (
        <div className={`${isKids ? 'w-4/5 bg-gray-400/18' :
            'w-full bg-green-50'} border-3 border-green-700/90
        dark:bg-green-200/60 p-4 flex
        flex-col ${!isFirst && 'mt-6'}`}>
            <p className="max-w-full w-full overflow-scroll
            py-3 2xl:text-md xs:text-lg">
                {parse(String(text))}
            </p>
            <div className="flex justify-between mt-5">
                <span className="color-black font-bold">Автор: {by}</span>
                <time className="font-medium">{formattedDate(time)}</time>
            </div>
        </div>
    )
}

export default CommentItem