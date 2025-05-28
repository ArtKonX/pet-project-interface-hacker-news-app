export interface CommentData {
    id: number,
    by: string,
    text: string,
    time: number,
    kids: number[]
    isHidden?: boolean,
    isKids?: boolean,
    isFirst: number
}

export interface EmbeddedCommentData {
    [key: number]: {
        comments: CommentData[];
        isHidden: boolean;
        isLoading: boolean;
        isError: boolean;
    }
}

export interface CommentsListAllData {
    comments: CommentData[],
    embeddedComments: EmbeddedCommentData,
    handleToggleComments: ({ kids, idComment }: { kids: number[], idComment: number }) => void,
    isLoading: boolean
}

export interface CommentsListData {
    comments: CommentData[],
    isKids: boolean,
    onMore: ({ kids, idComment }: { kids: number[], idComment: number }) => void,
    comment: CommentData,
    isLoading: boolean
}

export interface CommentBtnProps {
    id: number,
    by: string,
    text: string,
    time: number,
    kids: number[],
    onMore: ({ kids, idComment }: { kids: number[], idComment: number }) => void
}