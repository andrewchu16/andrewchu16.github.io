import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="bg-neutral-200 h-screen">
            <nav className="p-24 h-full">
                <ul className="flex flex-col justify-around h-full text-3xl">
                    <Link to="/" className="bg-red-200 flex-grow m-4 p-4 rounded-xl flex justify-center items-center hover:scale-90 transition-[transform]">
                        <li>
                            Home
                        </li>
                    </Link>
                    <Link to="/coop" className="bg-blue-200 flex-grow m-4 p-4 rounded-xl flex justify-center items-center hover:scale-90 transition-[transform]">
                        <li>
                            Coop
                        </li>
                    </Link>
                    <Link to="/film-review" className="bg-green-200 flex-grow m-4 p-4 rounded-xl flex justify-center items-center hover:scale-90 transition-[transform]">
                        <li>
                            Film Review
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default Home;