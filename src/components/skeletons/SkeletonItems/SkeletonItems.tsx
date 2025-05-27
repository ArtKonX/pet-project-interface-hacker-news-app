import SceletonItem from "../SkeletonItem/SkeletonItem"

const SkeletonItems = ({ lengthItems, isFullWidth }:
    { lengthItems: number, isFullWidth: boolean }) => {

    return (
        <ul className="flex flex-wrap justify-center
        w-full p-0 items-start mb-4">
            {Array.from({ length: lengthItems }).map((_, index) => (
                <li key={index as number} className={`mb-10 last:mb-0
                 ${isFullWidth ? 'max-w-full mx-0' :
                        '2xl:max-w-132 xs:max-w-full 2xl:mx-10'} w-full`}>
                    <SceletonItem />
                </li>
            ))}
        </ul>
    )
}

export default SkeletonItems