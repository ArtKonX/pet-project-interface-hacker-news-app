import Copyright from "./Copyright/Copyright"

const Footer = () => {

    return (
        <footer className="mt-auto min-w-full pb-4">
            <div className="bg-green-50 dark:bg-green-200/60 p-3 border-3
            border-green-700/90 flex
            justify-between items-center"
            >
                <Copyright text="ArtKonX © 2025" />
            </div>
        </footer>
    )
}

export default Footer