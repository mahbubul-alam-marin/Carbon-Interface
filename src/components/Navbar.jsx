import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/picture/logo.png"

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  const links = [
    {
      id: 1,
      link: "Estimates",
      dropdown: [
        { id: 1, drlink: "Electricity Emissions" },
        { id: 2, drlink: "Flight Emissions" },
        { id: 3, drlink: "Vehicle Emissions" },
        { id: 4, drlink: "Shipping Emissions" },
        { id: 6, drlink: "Combustion Emissions" },
      ],
    },
    { id: 2, link: "Carbon Ledger" },
    { id: 3, link: "Documentation" },
    { id: 4, link: "Login" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  return (

    <div class="grid grid-cols-3 gap-4 text-2xl items-center w-full h-20 text-gray-600 px-20">
      
      <div className="flex items-center w-80 space-x-2">
        <img src={logo} alt="Carbon Interface Logo" className="h-8" />
        
      </div>

      <div className="flex items-center space-x-2 ">
      <ul className="flex justify-center text-center  items-center">
        {links.map(({ id, link, dropdown }) => (
          <li
            key={id}
            className="relative inline-flex text-2xl items-center px-4 cursor-pointer capitalize font-medium hover:text-blue-500 duration-300 whitespace-nowrap"
          >
            {dropdown ? (
              <div
                className="relative"
                ref={menuRef}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
              >
                <span>{link}</span>
                {isDropdownOpen && (
                  <ul
                    className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md"
                    ref={dropdownRef}
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)} 
                  >
                    {dropdown.map(({ id, drlink }) => (
                      <li
                        key={id}
                        className="px-4 py-2 text-sm hover:bg-gray-200 cursor-pointer"
                      >
                        {drlink}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <span>{link}</span>
            )}
          </li>
        ))}
      </ul>

      </div>
      

      <div className="flex justify-center">
      <button className=" bg-blue-600 text-white font-bold py-2 cursor-pointer px-4 rounded text-lg hover:bg-blue-700">
                Get started
              </button>
      </div>
    

    
    
  </div>



    
  );
};

export default Navbar;
