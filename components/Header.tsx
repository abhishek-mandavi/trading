import Navitems from "@/components/Navitems";
import UserDropdown from "@/components/UserDropdown";
import { searchStocks } from "@/lib/action/finnhub.actions";
import Link from 'next/link';

const Header = async ({ user }: { user: User }) => {
    const initialStocks = await searchStocks();
    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <Link href="/">
                    STOCK-TRADER
                </Link>

                <nav className="hidden sm:block">
                    <Navitems initialStocks={initialStocks}/>
                </nav>

                <UserDropdown user = {user} initialStocks={initialStocks}/>
            </div>
        </header>
    )
}

export default Header

