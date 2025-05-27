import SkeletonComment from "../SkeletonComment/SkeletonComment"

const SkeletonComments = ({ lengthItems }: { lengthItems: number }) => {

    return (
        <ul className="flex flex-wrap justify-center
        w-full p-0 items-start mb-4">
            {Array.from({ length: lengthItems }).map((_, index) => (
                <li key={index as number} className="mb-4 last:mb-0
                w-full">
                    <SkeletonComment />
                </li>
            ))}
        </ul>
    )
}

export default SkeletonComments