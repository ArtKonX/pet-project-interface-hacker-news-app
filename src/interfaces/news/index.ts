export interface NewsDataItem {
    id: number,
    by: string,
    descendants: number,
    score: number,
    time: number,
    title: string,
    type: string,
    url: string
}

export interface NewsSingleElemProps {
    id: number,
    title: string,
    url: string,
    time: number,
    by: string,
    kids?: number[],
    score: number,
    commentsLength: number
}
