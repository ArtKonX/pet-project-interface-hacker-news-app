import { Link } from "react-router-dom"

const Logo = ({ text }: { text: string }) => {

    return (
        <Link to='/'>
            <span className="2xl:text-4xl text-green-700 dark:text-green-800
            font-bold hover:text-green-700/70
            transition-colors duration-900 xs:text-3xl">
                {text}
            </span>
        </Link>
    )
}

export default Logo