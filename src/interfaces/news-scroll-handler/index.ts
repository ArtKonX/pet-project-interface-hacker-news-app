export interface NewsScrollHandlerProps {
    update: () => void;
    isScrollingUp: boolean;
    setIsScrollingUp: (isScrollingUp: boolean) => void;
    setIsBottom: (isBottom: boolean) => void;
    isCurrentLoading: boolean;
    isUpdating: boolean;
    setIsPushAction: (isPushAction: boolean) => void
}