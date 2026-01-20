import Navitems from "@/components/Navitems";
import UserDropdown from "@/components/UserDropdown";
import Link from 'next/link';

const Header = async ({ user }: { user: User }) => {
    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <Link href="/">
                    STOCK-TRADER
                </Link>

                <nav className="hidden sm:block">
                    <Navitems/>
                </nav>

                <UserDropdown user = {user}/>
            </div>
        </header>
    )
}

export default Header

