import { ReactNode } from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import SkeletonHeader from "../skeletons/SkeletonHeader/SkeletonHeader"
import SkeletonFooter from "../skeletons/SkeletonFooter/SkeletonFooter"

interface LayoutProps {
    children: ReactNode,
    isSkeleton: boolean
}

const Layout = ({ children, isSkeleton }: LayoutProps) => {

    return (
        <div className="h-screen flex flex-col items-center">
            {isSkeleton ? <SkeletonHeader /> : <Header />}
            {children}
            {isSkeleton ? <SkeletonFooter /> : <Footer />}
        </div>
    )
}

export default Layout