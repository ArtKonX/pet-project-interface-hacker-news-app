import { BtnMoreProps } from "@src/interfaces/ui"

const BtnMore = ({ handleLoadMore, text }: BtnMoreProps) => {

    return (
        <button className="mb-4 cursor-pointer font-bold text-2xl border-3
                    border-green-700/90 bg-green-50 p-2
                    text-green-800 hover:text-green-800/50
                transition-colors duration-600 dark:bg-green-200/60"
            onClick={handleLoadMore}>{text}</button>
    )
}

export default BtnMore