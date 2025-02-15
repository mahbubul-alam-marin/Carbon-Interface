import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import React Router Link
import logo from "../assets/picture/logo.png";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

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

    return (
        <nav className="flex justify-between items-center p-4 bg-white shadow-sm relative">
           
            {/* Logo */}
            <div className="flex items-center space-x-2 px-10">
                <Link to="/">
                    <img src={logo} alt="logo" className="h-12" />
                </Link>
            </div>

            {/* Navigation Links */}
            <ul className="flex text-lg space-x-8 text-gray-700 items-center">
                
                {/* Dropdown Menu */}
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
                                <Link to="/electricity" className="ml-2">Electricity Emissions ⚡</Link>
                            </li>
                            <li className="px-6 py-3 hover:bg-gray-100 text-gray-800 flex items-center cursor-pointer">
                                <Link to="/flights" className="ml-2">Flight Emissions ✈️</Link>
                            </li>
                            <li className="px-6 py-3 hover:bg-gray-100 text-gray-800 flex items-center cursor-pointer">
                                <Link to="/vehicles" className="ml-2">Vehicle Emissions 🚙</Link>
                            </li>
                            <li className="px-6 py-3 hover:bg-gray-100 text-gray-800 flex items-center cursor-pointer">
                                <Link to="/shipping" className="ml-2">Shipping Emissions 📦</Link>
                            </li>
                            <li className="px-6 py-3 hover:bg-gray-100 text-gray-800 font-semibold flex items-center cursor-pointer">
                                <Link to="/fuel" className="ml-2">Fuel Combustion Emissions ⛽</Link>
                            </li>
                        </ul>
                    )}
                </li>

                {/* Other Navigation Links */}
                <li className="hover:text-blue-600 cursor-pointer font-semibold">
                    <Link to="/carbon-ledger">Carbon Ledger</Link>
                </li>
                <li className="hover:text-blue-600 cursor-pointer font-semibold">
                    <Link to="/documentation">Documentation</Link>
                </li>
                <li className="hover:text-blue-600 cursor-pointer font-semibold">
                    <Link to="/login">Login</Link>
                </li>
            </ul>

            {/* Get Started Button */}
            <div className="pr-10">
                <Link to="/get-started">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all">
                        Get Started
                    </button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
