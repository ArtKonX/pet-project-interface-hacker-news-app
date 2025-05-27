import Layout from "@src/components/Layout/Layout";
import NewsItems from "@src/components/news/NewsItems/NewsItems";
import SkeletonItems from "@src/components/skeletons/SkeletonItems/SkeletonItems";
import NewsScrollHandler from "@src/components/NewsScrollHandler/NewsScrollHandler";
import BtnUpdate from "@src/components/ui/BtnUpdate/BtnUpdate";
import { useSelector } from "@src/hooks/useTypedSelector";
import { useGetNewStoriesQuery } from "@src/redux/services/matrixNewsApi";
import { pushNextNews, resetNews, setNewNews } from "@src/redux/slices/newsSlice";
import { selectNewsData } from "@src/selectors/selectors";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import InfoMessage from "@src/components/InfoMessage/InfoMessage";
import BtnMore from "@src/components/ui/BtnMore/BtnMore";

const NewsPage = () => {
    const [offset, setOffset] = useState(0);
    const [isBottom, setIsBottom] = useState(false);
    const [isScrollingUp, setIsScrollingUp] = useState(false);
    const [isCurrentLoading, setIsCurrentLoading] = useState(false);
    const [isRenderPushList, setIsRenderPushList] = useState(false);
    const [isPushAction, setIsPushAction] = useState(false);

    const [isUpdating, setIsUpdating] = useState(false);
    const [isErrorLoading, setIsErrorLoading] = useState(false);

    const { data, isLoading, error } = useGetNewStoriesQuery({ offset: offset });

    const newsData = useSelector(selectNewsData);

    const dispatch = useDispatch();

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            const currentSeconds = date.getSeconds();

            if (currentSeconds % 60 === 0) {
                setIsPushAction(false)
                if (!isUpdating) {
                    update();
                }
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [isUpdating]);

    useEffect(() => {

        const isSuccessData = data?.every(elem => elem.error);

        if (isSuccessData) {
            setIsErrorLoading(isSuccessData)
        }

        if (data !== undefined && data.length > 0 && !isSuccessData) {
            dispatch(setNewNews({ nextNews: data }));
            setIsCurrentLoading(false);
            setIsUpdating(false);
        }
    }, [data?.length])

    useEffect(() => {
        if (isPushAction) {
            if (data && data.length > 0) {
                dispatch(pushNextNews({ nextNews: data }));
                setIsCurrentLoading(false);
                setIsUpdating(false);
            } else {
                setIsCurrentLoading(false);
            }
        }

        else if (!isPushAction) {
            setIsCurrentLoading(true);
            if (data !== undefined && data.length > 0) {
                dispatch(setNewNews({ nextNews: data }));
                setIsCurrentLoading(false);
                setIsUpdating(false);
            }
        }
    }, [data]);

    useEffect(() => {
        if (isBottom) {
            setIsCurrentLoading(true)
            setOffset(offset + 10);
            setIsRenderPushList(!isRenderPushList)
        }
    }, [isBottom]);

    const update = () => {
        if (isUpdating) return;
        setIsPushAction(false)
        setIsUpdating(true);
        setOffset(offset + 10);
        setIsCurrentLoading(true);

        dispatch(resetNews());
    };

    const handleLoadMore = () => {
        if (!isCurrentLoading) {
            setIsPushAction(true);
            setIsCurrentLoading(true);
            setOffset(prev => prev + 10);
            setIsRenderPushList(prev => !prev);
        }
    };

    const newsScrollHandlerProps = {
        update: update,
        isScrollingUp: isScrollingUp,
        setIsScrollingUp: setIsScrollingUp,
        setIsBottom: setIsBottom,
        isCurrentLoading: isCurrentLoading,
        isUpdating: isUpdating,
        isLoading: isLoading,
        setIsPushAction,
    }

    if (error || isErrorLoading && !isLoading) return (
        <Layout isSkeleton={false}>
            <InfoMessage text="Ошибка загрузки" isMinWidth={false} />
        </Layout>
    )

    if (isLoading) return (
        <Layout isSkeleton={true}>
            <BtnUpdate text='↻' onAction={update} isScrollingUp={isScrollingUp}
                isCurrentLoading={isCurrentLoading || isLoading} />
            <SkeletonItems isFullWidth={false} lengthItems={4} />
        </Layout>
    )

    return (
        <Layout isSkeleton={false}>
            <BtnUpdate text='↻' onAction={update} isScrollingUp={isScrollingUp}
                isCurrentLoading={isCurrentLoading || isLoading} />
            <NewsItems dataNews={newsData.news} />
            <NewsScrollHandler {...newsScrollHandlerProps} />
            {isCurrentLoading && <SkeletonItems isFullWidth={false} lengthItems={4} />}
            {!isCurrentLoading &&
                (<BtnMore handleLoadMore={handleLoadMore} text='Больше' />)}
        </Layout>
    )
}

export default NewsPage