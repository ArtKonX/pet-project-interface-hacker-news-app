import { NewsScrollHandlerProps } from '@src/interfaces/news-scroll-handler';
import { useEffect, useRef } from 'react';

const NewsScrollHandler = ({ ...props }: NewsScrollHandlerProps) => {
    const { update,
        setIsBottom, setIsScrollingUp,
        isScrollingUp, isCurrentLoading,
        isUpdating, setIsPushAction } = props;

    const threshold = -100;
    const ref = useRef<number>(0);

    useEffect(() => {
        let lastScrollTop = 0;
        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            const distanceToBottom = scrollHeight - scrollTop - clientHeight;
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (distanceToBottom <= threshold) {
                setIsPushAction(true)
                setIsBottom(true)
            } else {
                setIsBottom(false)
            }

            if (currentScrollTop < lastScrollTop) {
                setIsScrollingUp(true);
            } else {
                setIsScrollingUp(false);
            }
            lastScrollTop = currentScrollTop;

            ref.current = currentScrollTop

            if (ref.current <= -100 && !isScrollingUp && !isCurrentLoading && !isUpdating) {
                setIsPushAction(false)
                update();
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrollingUp, isCurrentLoading, isUpdating]);

    return null;
};

export default NewsScrollHandler;