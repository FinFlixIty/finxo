// Navbar.js 

export default function Navbar() {
    return (
        <div>
            <nav classNameName="fixed w-full 
								z-20 top-0 left-0">
                <div className="flex flex-wrap items-center 
								justify-between mx-auto p-4">
                    <a href="#"
                        className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>
                        <span className="self-center text-2xl font-semibold ">
                            FINXO
                        </span>
                    </a>
                </div>
            </nav>
        </div>
    )
}
