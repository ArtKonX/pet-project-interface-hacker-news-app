import SceletonComments from "@src/components/skeletons/SceletonComments/SkeletonComments"
import CommentWithBtn from "../CommentWithBtn/CommentWithBtn"
import CommentItem from "../CommentItem/CommentItem"
import CommentsList from "../CommentsList/CommentsList"
import withMoreCommentsLoader from "@src/hocs/withMoreCommentsLoader"
import { CommentsListAllData } from "@src/interfaces/comments"

const EnhancedMoreCommentsList = withMoreCommentsLoader(CommentsList);

const CommentsListAll = (
    { comments, embeddedComments,
        handleToggleComments, isLoading }:
        CommentsListAllData) => {

    return (
        <ul className="w-full p-0">
            {comments.length > 0 && comments.map((comment, indx) => (
                <li key={comment.id} className="mb-6">
                    {comment?.kids ?
                        (<CommentWithBtn onMore={handleToggleComments} {...comment} />) :
                        (<CommentItem isKids={false} {...comment} isFirst={indx + 1} />)}
                    {isLoading && <SceletonComments lengthItems={4} />}
                    {embeddedComments[comment.id] && !embeddedComments[comment.id]?.isHidden &&
                        <EnhancedMoreCommentsList isKids={true} onMore={handleToggleComments}
                            comment={comment} comments={embeddedComments[comment.id].comments}
                            isLoading={embeddedComments[comment.id].comments.length < comment.kids.length}
                            isError={embeddedComments[comment.id].isError}
                            lengthComments={embeddedComments[comment.id].comments.length}
                        />
                    }
                </li>))}
        </ul>
    )
}

export default CommentsListAll