import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import logo from "../assets/picture/logo.png";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

  
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="flex justify-between items-center p-4 bg-white shadow-sm relative">
           
            <div className="flex items-center space-x-2 px-10">
                <a href="/">
                    <img src={logo} alt="logo" className="h-12" />
                </a>
            </div>

            
            <ul className="flex text-lg space-x-8 text-gray-700 items-center">
                
               
                <li className="relative" ref={dropdownRef}>
                    <button
                        className="flex items-center space-x-1 px-4 py-2 rounded-lg hover:bg-gray-200 transition-all"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        <span className="font-semibold text-gray-800">Estimates</span>
                        <FaChevronDown className={`text-gray-600 text-sm mt-1 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                    </button>

                    {dropdownOpen && (
                        <ul className="absolute right-0 text-xs font-bold mt-2 w-64 bg-white shadow-lg rounded-lg py-2 overflow-hidden z-50">
                            <li className="px-6 py-3 hover:bg-gray-100 text-gray-800 flex items-center cursor-pointer">
                                
                                <a href="/electricity" className="ml-2">Electricity Emissions ⚡</a>
                            </li>
                            <li className="px-6 py-3 hover:bg-gray-100 text-gray-800 flex items-center cursor-pointer">
                                
                                <a href="/flights" className="ml-2">Flight Emissions ✈️</a>
                            </li>
                            <li className="px-6 py-3 hover:bg-gray-100 text-gray-800 flex items-center cursor-pointer">
                               
                                <a href="/vehicles" className="ml-2">Vehicle Emissions 🚙</a>
                            </li>
                            <li className="px-6 py-3 hover:bg-gray-100 text-gray-800 flex items-center cursor-pointer">
                                
                                <a href="/shipping" className="ml-2">Shipping Emissions 📦</a>
                            </li>
                            <li className="px-6 py-3 hover:bg-gray-100 text-gray-800 font-semibold flex items-center cursor-pointer">
                                
                                <a href="/fuel" className="ml-2">Fuel Combustion Emissions ⛽</a>
                            </li>
                        </ul>
                    )}
                </li>

                
                <li className="hover:text-blue-600 cursor-pointer font-semibold">Carbon Ledger</li>
                <li className="hover:text-blue-600 cursor-pointer font-semibold">Documentation</li>
                <li className="hover:text-blue-600 cursor-pointer font-semibold">Login</li>
            </ul>

           
            <div className="pr-10">
                <a href="/get-started">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all">
                        Get Started
                    </button>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
