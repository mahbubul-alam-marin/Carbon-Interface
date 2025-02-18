import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom"; 
import logo from "../assets/picture/logo.png";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const location = useLocation();

    // Close dropdown when clicking outside
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

    // Determine the navbar background color based on the route
    const isDarkNavbar = location.pathname === "/carbon-ledger";

    return (
        <nav className={`flex justify-between items-center p-4 shadow-sm relative transition-all duration-300 ${isDarkNavbar ? "bg-black text-white" : "bg-white text-gray-700"}`}>
           
            {/* Logo */}
            <div className="flex items-center space-x-2 px-10">
                <Link to="/">
                    <img src={logo} alt="logo" className="h-12" />
                </Link>
            </div>

            {/* Navigation Links */}
            <ul className="flex text-lg space-x-8 items-center">
                
                {/* Dropdown Menu */}
                <li className="relative" ref={dropdownRef}>
                    <button
                        className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all ${isDarkNavbar ? "hover:bg-gray-800" : "hover:bg-gray-200"}`}
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        <span className={`font-semibold ${isDarkNavbar ? "text-gray-200" : "text-gray-800"}`}>Estimates</span>
                        <FaChevronDown className={`text-sm mt-1 transition-transform ${dropdownOpen ? "rotate-180" : ""} ${isDarkNavbar ? "text-gray-400" : "text-gray-600"}`} />
                    </button>

                    {dropdownOpen && (
                        <ul className={`absolute right-0 text-xs font-bold mt-2 w-64 bg-white shadow-lg rounded-lg py-2 overflow-hidden z-50 ${isDarkNavbar ? "text-black" : "text-gray-800"}`}>
                            <li className="px-6 py-3 hover:bg-gray-100 flex items-center cursor-pointer">
                                <Link to="/electricityEmissions" className="ml-2">Electricity Emissions ⚡</Link>
                            </li>
                            <li className="px-6 py-3 hover:bg-gray-100 flex items-center cursor-pointer">
                                <Link to="/flights" className="ml-2">Flight Emissions ✈️</Link>
                            </li>
                            <li className="px-6 py-3 hover:bg-gray-100 flex items-center cursor-pointer">
                                <Link to="/vehicles" className="ml-2">Vehicle Emissions 🚙</Link>
                            </li>
                            <li className="px-6 py-3 hover:bg-gray-100 flex items-center cursor-pointer">
                                <Link to="/shipping" className="ml-2">Shipping Emissions 📦</Link>
                            </li>
                            <li className="px-6 py-3 hover:bg-gray-100 font-semibold flex items-center cursor-pointer">
                                <Link to="/fuel" className="ml-2">Fuel Combustion Emissions ⛽</Link>
                            </li>
                        </ul>
                    )}
                </li>

                {/* Other Navigation Links */}
                <li className={`hover:text-blue-600 cursor-pointer font-semibold ${isDarkNavbar ? "text-gray-300" : "text-gray-800"}`}>
                    <Link to="/carbon-ledger">Carbon Ledger</Link>
                </li>
                <li className={`hover:text-blue-600 cursor-pointer font-semibold ${isDarkNavbar ? "text-gray-300" : "text-gray-800"}`}>
                    <Link to="/documentation">Documentation</Link>
                </li>
                <li className={`hover:text-blue-600 cursor-pointer font-semibold ${isDarkNavbar ? "text-gray-300" : "text-gray-800"}`}>
                    <Link to="/login">Login</Link>
                </li>
            </ul>

            {/* Get Started Button */}
            <div className="pr-10">
                <Link to="/register">
                    <button className={`px-6 py-2 rounded-lg transition-all ${isDarkNavbar ? "bg-purple-600 text-white hover:bg-purple-700" : "bg-blue-600 text-white hover:bg-blue-700"}`}>
                        Get Started
                    </button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
