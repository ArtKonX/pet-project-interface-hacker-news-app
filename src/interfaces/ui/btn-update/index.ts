import { MouseEventHandler } from "react";

export interface BtnUpdateProps {
    text: string,
    onAction: MouseEventHandler<HTMLButtonElement>,
    isScrollingUp?: boolean,
    isCurrentLoading: boolean
}