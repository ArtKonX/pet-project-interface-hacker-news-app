import { CommentData, EmbeddedCommentData } from "../comments";

export interface WrappedCommentsLoaderProps {
    comments: CommentData[],
    embeddedComments: EmbeddedCommentData,
    handleToggleComments: ({ kids, idComment }: { kids: number[], idComment: number }) => void,
    isLoading: boolean,
    commentsError: boolean,
    embeddedCommentsError: boolean,
    lengthComments: number
}

export interface WrappedMoreCommentsLoaderProps {
    comment: CommentData,
    comments: CommentData[],
    onMore: ({ kids, idComment }: { kids: number[], idComment: number }) => void,
    isLoading: boolean,
    lengthComments: number,
    isKids: boolean,
    isError: boolean
}