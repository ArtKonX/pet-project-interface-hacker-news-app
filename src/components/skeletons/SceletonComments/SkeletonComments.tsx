import SceletonComment from "../SkeletonComment/SkeletonComment"

const SceletonComments = ({ lengthItems }: { lengthItems: number }) => {

    return (
        <ul className="flex flex-wrap justify-center
        w-full p-0 items-start mb-4">
            {Array.from({ length: lengthItems }).map((_, index) => (
                <li key={index as number} className="last:mb-0 my-4
                w-full">
                    <SceletonComment />
                </li>
            ))}
        </ul>
    )
}

export default SceletonComments