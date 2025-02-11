import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-900 p-1 w-full box-border fixed top-0 z-50"> {/* Key changes here */}
            <div className="flex justify-between items-center px-4 w-full">
                {/* Left Side - Jana Seva Kendra */}
                <a href="/" className="flex items-start flex-1">
                    <h1 className="text-3xl font-bold text-white">
                        Jana Seva Kendra
                    </h1>
                </a>

                {/* Right Side - SAI DIGITAL MICRO XEROX */}
                <div className="flex justify-end items-center flex-1">
                    <h1 className="text-3xl font-bold text-white text-right">
                        SAI DIGITAL MICRO XEROX
                    </h1>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;