export default function Footercard() { 
	return ( 
        <div className="flex flex-wrap justify-center">
            <div className="m-4 p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="h-auto w-full flex flex-col rounded-xl bg-white text-gray-700 shadow-2xl">
                    <div className="p-6">
                        <h5 className="text-center mb-2 block font-sans text-xl font-semibold text-blue-gray-900 antialiased">
                            Reach Us At
                        </h5>
                        <ul>
                            <li className="mt-2">
                                <span><i className="fa fa-phone mr-2"></i></span>
                                Your Number
                            </li>
                            <li className="mt-2">
                                <span><i className="fa fa-envelope mr-2"></i></span>
                                Your feedback mail
                            </li>
                            <li className="mt-2">
                                <span><i className="fa-solid fa-map-pin mr-2"></i></span>
                                Your Address
                                <span className="pl-4">
                                    Your Address Continue
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="m-4 p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="h-auto w-full flex flex-col rounded-xl bg-white text-gray-700 shadow-2xl">
                    <div className="p-6">
                        <h5 className="mb-2 block font-sans text-xl font-semibold text-blue-gray-900 antialiased">
                            Branding & Collaboration
                        </h5>
                        <i className="fa fa-handshake fa-2xl"></i>
                        <div className="text-left mt-4">
                            <span><i className="fa fa-envelope mr-2"></i></span>
                            Your Email
                        </div>
                        <div className="mt-2 text-left">
                            <span><i className="fa-solid fa-map-pin mr-2"></i></span>
                            Address
                            <span className="pl-5">
                                Address
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
