import InfoMessage from "@src/components/InfoMessage/InfoMessage";
import SkeletonComments from "@src/components/skeletons/SkeletonComments/SkeletonComments";
import { WrappedMoreCommentsLoaderProps } from "@src/interfaces/hocs";
import { ElementType } from "react";

const withMoreCommentsLoader = (WrappedComponent: ElementType) => {
    return ({ ...props }: WrappedMoreCommentsLoaderProps) => {

        const { comment, onMore,
            comments, isLoading, lengthComments,
            isKids, isError } = props;

        if (isError) return <InfoMessage isMinWidth={true}
            text={`Ошибка загрузки ${lengthComments <= 1 ? 'комментария' :
                'комментариев'}!`} />

        if (isLoading) {
            return (
                <div className="mt-6 flex justify-end">
                    <div className="w-4/5">
                        <SkeletonComments lengthItems={comment.kids.length} />
                    </div>
                </div>
            )
        }

        if (comments.length > 0) {
            return (
                <WrappedComponent isKids={isKids} onMore={onMore}
                    comment={comment} comments={comments}
                    isLoading={isLoading}
                />
            );
        }

        return <InfoMessage text='К сожалению, здесь нет комментариев(' isMinWidth={false} />
    };
};

export default withMoreCommentsLoader;