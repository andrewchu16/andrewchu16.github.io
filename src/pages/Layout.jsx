import { Outlet, Link } from "react-router-dom";

function Layout() {
    return (
        <div>
            <nav>
                <ul className="flex flex-row justify-around">
                    <li className="bg-red-200 flex-grow">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="bg-blue-200 flex-grow">
                        <Link to="/coop">Coop</Link>
                    </li>
                </ul>
            </nav>
            
            <Outlet />
        </div>
        )
    };
    
    export default Layout;