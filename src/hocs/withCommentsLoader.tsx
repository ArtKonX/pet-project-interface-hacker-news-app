import InfoMessage from "@src/components/InfoMessage/InfoMessage";
import SceletonComments from "@src/components/skeletons/SceletonComments/SkeletonComments";
import { WrappedCommentsLoaderProps } from "@src/interfaces/hocs";
import { ElementType } from "react";

const withCommentsLoader = (WrappedComponent: ElementType) => {
  return ({ ...props }: WrappedCommentsLoaderProps) => {

    const { comments, embeddedComments,
      handleToggleComments, isLoading,
      commentsError, embeddedCommentsError,
      lengthComments } = props;

    if (isLoading) {
      return <SceletonComments lengthItems={lengthComments} />;
    }

    if (commentsError) {
      return <InfoMessage text='Что-то пошло не так(' isMinWidth={false} />
    }

    if (comments.length > 0) {
      return (
        <>
          <h3 className="text-2xl font-bold mb-6">Комментарии:</h3>
          <WrappedComponent
            comments={comments}
            embeddedComments={embeddedComments}
            handleToggleComments={handleToggleComments}
            embeddedCommentsError={embeddedCommentsError}
          />
        </>
      );
    }

    return <InfoMessage text='К сожалению, здесь нет комментариев(' isMinWidth={false} />
  };
};

export default withCommentsLoader;