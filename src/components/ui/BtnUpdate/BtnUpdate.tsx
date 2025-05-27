import { BtnUpdateProps } from "@src/interfaces/ui";

const BtnUpdate = ({ text, onAction, isScrollingUp, isCurrentLoading }: BtnUpdateProps) => {

    return (
        <button disabled={isCurrentLoading}
            className={`
                text-green-700
                font-bold
                hover:text-green-700/70
                cursor-pointer
                text-4xl
                mb-4
                transition-all
                transform-origin-center
                ${isScrollingUp && 'animate-spin'}
                transition-all
                duration-500
                transform
                disabled:text-green-700/70
                disabled:animate-spin
                disabled:cursor-auto
                hover:animate-spin
            `}
            onClick={onAction}
        >
            {text}
        </button>
    );
};

export default BtnUpdate;