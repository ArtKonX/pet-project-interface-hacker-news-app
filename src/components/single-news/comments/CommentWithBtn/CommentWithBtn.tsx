import { CommentBtnProps } from "@src/interfaces/comments";
import formattedDate from "@src/utils/formattedDate";
import parse from 'html-react-parser';

const CommentWithBtn = ({ ...props }: CommentBtnProps) => {

    const { id, by, text, time, onMore, kids } = props;

    return (
        <div className="bg-gray-400/18 p-4 flex flex-col">
            <p className="text-md overflow-x-auto max-w-full w-full py-3">
                {parse(String(text))}
            </p>
            <div className="flex justify-between mt-5">
                <span className="color-black font-bold">Автор: {by}</span>
                <time className="font-medium">{formattedDate(time)}</time>
            </div>
            <button className="cursor-pointer mt-2 2xl:text-3xl xs:text-lg
            text-green-700 font-bold text-end
            hover:opacity-70 transition-opacity
            duration-500"
                onClick={() => onMore({ kids, idComment: id })}>
                💬 {kids.length}
            </button>
        </div>
    )
}

export default CommentWithBtn