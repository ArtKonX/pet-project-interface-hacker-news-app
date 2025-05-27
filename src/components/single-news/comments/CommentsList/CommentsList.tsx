import { CommentsListData } from "@src/interfaces/comments"
import CommentItem from "../CommentItem/CommentItem"

const CommentsList = ({ isKids, comments, onMore, comment, isLoading }: CommentsListData) => {

    return (
        <>
            {comments.length > 0 && (
                <ul>
                    {comments.map((comment) => (
                        <>
                            <li className={`${isKids ? 'flex justify-end' :
                                'flex justify-center'}`}
                                key={comment.id}>
                                <CommentItem isKids={isKids} {...comment} />
                            </li>
                        </>
                    ))}
                    <div className="flex justify-end">
                        <div className="w-4/5">
                            <button disabled={isLoading} className="mt-6 cursor-pointer bg-green-700/90
                            p-2 text-white font-bold text-xl border-4
                            border-gray-400 hover:opacity-85
                            transition-opacity duration-900
                            disabled:opacity-0 disabled:cursor-auto"
                                onClick={() => onMore({ kids: comment.kids, idComment: comment.id })}>
                                Спрятать
                            </button>
                        </div>
                    </div>
                </ul>)}
        </>
    )
}

export default CommentsList