import Logo from "./Logo/Logo"
import Time from "./Time/Time"

const Header = () => {

    return (
        <header className="mt-4 bg-green-50
        p-5 border-3 border-green-700/90
        flex justify-between items-center
        min-w-full mb-4 dark:bg-green-200/60">
            <Logo text='MatrixNews' />
            <Time />
        </header>
    )
}

export default Header