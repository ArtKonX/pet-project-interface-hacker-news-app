import Layout from "@src/components/Layout/Layout"
import NewsSingleElem from "@src/components/single-news/NewsSingleElem/NewsSingleElem";
import { useGetCommentsMutation, useGetEmbeddedCommentsMutation } from "@src/redux/services/commentsApi";
import { useGetNewStoryQuery } from "@src/redux/services/matrixNewsApi"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentsListAll from "@src/components/single-news/comments/CommentsListAll/CommentsListAll";
import SkeletonItems from "@src/components/skeletons/SkeletonItems/SkeletonItems";
import withCommentsLoader from "@src/hocs/withCommentsLoader";
import InfoMessage from "@src/components/InfoMessage/InfoMessage";
import BtnUpdate from "@src/components/ui/BtnUpdate/BtnUpdate";

const EnhancedCommentsList = withCommentsLoader(CommentsListAll);

const SingleNewsPage = () => {
    const { id } = useParams() as { id: string };
    const { data: storyData, isLoading: storyLoading, error: storyError } = useGetNewStoryQuery({ id });
    const [getEmbeddedComments, { isLoading: embeddedCommentsLoading, isError: embeddedCommentsError }] = useGetEmbeddedCommentsMutation();
    const [getComments, { isLoading: commentsLoading }] = useGetCommentsMutation();

    const [embeddedComments, setEmbeddedComments] = useState({});
    const [comments, setComments] = useState([]);
    const [commentsError, setCommentsError] = useState(false);
    const [numberAllComments, setNumberAllComments] = useState(0);

    const fetchAllComments = () => {
        if (storyData?.kids) {
            const promises = storyData.kids.map(async (id: number) => {
                const response = await getComments({ id });
                const data = response.data;
                setCommentsError(data === null);
                if (!data?.deleted) {
                    setComments((prev) => [...prev, data]);
                }
            });
            setNumberAllComments(promises.length);
            Promise.all(promises);
        }
    };

    useEffect(() => {

        const interval = setInterval(() => {
            const date = new Date();
            const currentSeconds = date.getSeconds();

            if (currentSeconds % 60 === 0 && storyData.kids.length !== numberAllComments) {
                setComments([])
                fetchAllComments();
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [storyData, comments, numberAllComments]);

    const handleToggleComments = ({ kids, idComment }: { kids: number[], idComment: number }) => {
        setEmbeddedComments(prev => {
            const currentItem = prev[idComment] || { comments: [],
                isHidden: true,
                isLoading: embeddedCommentsLoading };
            return {
                ...prev,
                [idComment]: {
                    ...currentItem,
                    isHidden: !currentItem.isHidden
                }
            };
        });

        if (kids && !embeddedComments[idComment]?.comments.length) {
            const promises = kids.map(async (id: number) => {
                const response = await getEmbeddedComments({ id });
                const data = response.data;
                setEmbeddedComments(prev => {
                    const newComments = Array.isArray(data) ? data : [data];
                    const currentComments = prev[idComment]?.comments || [];
                    return {
                        ...prev,
                        [idComment]: {
                            comments: [...currentComments, ...newComments],
                            isHidden: false,
                            isLoading: embeddedCommentsLoading,
                            isError: data === null
                        }
                    };
                });
            });
            Promise.all(promises);
        }
    };

    const onUpdate = () => {
        setComments([])
        fetchAllComments();
    }

    useEffect(() => {
        fetchAllComments();
    }, [storyData]);

    const enhancedCommentsListProps = { comments, embeddedComments, handleToggleComments, isLoading: commentsLoading, commentsError, embeddedCommentsError, lengthComments: storyData?.kids?.length }

    if (storyLoading) {
        return (
            <Layout isSkeleton={true}>
                <BtnUpdate text='↻' onAction={onUpdate} isCurrentLoading={storyLoading} />
                <SkeletonItems isFullWidth={true} lengthItems={1} />
            </Layout>
        );
    }

    if (storyError || !storyData) {
        return (
            <Layout isSkeleton={false}>
                <InfoMessage text='Ошибка загрузки новости!' isMinWidth={false} />
            </Layout>
        );
    }

    return (
        <Layout isSkeleton={false}>
            <BtnUpdate text='↻' onAction={onUpdate} isCurrentLoading={storyLoading} />
            {storyData && <NewsSingleElem commentsLength={comments.length} {...storyData} />}
            <EnhancedCommentsList {...enhancedCommentsListProps} />
        </Layout>
    );
};

export default SingleNewsPage;