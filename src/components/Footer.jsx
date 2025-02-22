import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import logo from "../assets/picture/logo.png"
import { Link } from "react-router-dom";

const Footer = () => {
  const products = [
    {
      id: 1,
      title: "Carbon Ledger",
      link: "/carbon-ledger"
    },
    { 
      id: 2,
      title: "Electricity Emissions",
      link: "/electricityEmissions"
     },
     { 
      id: 3,
      title: "Flight Emissions",
      link: "/flights"
     },
     { 
      id: 4,
      title: "Vehicle Emissions",
      link: "/vehicles"
     },
     { 
      id: 5,
      title: "Shipping Emissions",
      link:"/shipping"
     },
     { 
      id: 6,
      title: "Fuel Combustion Emissions",
      link:"/fuel"
     },
     {
      id:7,
      title:"Methodologies",
      link: "https://faint-class-d56.notion.site/Carbon-Interface-Methodology-d788fff61c724a48b100e0f7d77c0c57"
     }
  ];

  const Developers=[
    {id:1,
      title:"Documentation",
      link:""
    },
    {id:2,
      title:"Discord Community",
      link:""
    },
    {id:3,
      title:"Electricity Emissions Tutorial",
      link:"/electricityEmissionTutorial"
    }
  ];

  const Companys=[
    {
      id:1,
      title:"Contact"
    },
    {
      id:2,
      title:"Privacy Policy"
    },
    {
      id:3,
      title:"Term of Use"
    }
    


  ];


  return (
    <div className="bg-gray-900 grid grid-cols-4 px-10 text-center text-gray-500 pb-20">
  <div className="bg-gray-900 grid grid-cols-4 px-10">
    <div className="flex flex-col px-2">
      
      {/* Logo Section */}
      <div className="flex space-x-2 pb-2">
        <a href="/">
          <img src={logo} alt="Carbon Interface Logo" className="h-8" />
        </a>
      </div>

      {/* Description Section */}
      <div className="text-left px-10">
        <p>The emissiond estimation platform.</p>
      </div>

    </div>
  </div>



      {/**product */}
      <div className="flex flex-col">
        <span className="font-semibold text-xs text-gray-400 uppercase text-left pb-2">
          product
        </span>
        <ul>
          {products.map(({id, title,link }) => (
            <Link to={link}>
              <li key={id}
                className="font-semibold hover:border-b-2 w-fit space-y-2 duration-200 py-1"
              >
                {title}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Developer*/}

      <div className="flex flex-col">
        <span className="font-semibold text-sm text-gray-400 uppercase text-left pb-2">
          developer
        </span>
        <ul>
          {Developers.map(({id, title, link}) => (
            <Link to={link}>
              <li
                key={id}
                className="font-semibold hover:border-b-2 w-fit space-y-2 duration-200 py-1"
              >
                {title}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/** Company */}

      <div className="flex flex-col">
        <span className="font-semibold text-sm text-gray-400 uppercase text-left pb-2">
          company
        </span>
        <ul>
          {Companys.map(({id, title}) => (
            <a href="">
              <li key={id} className="font-semibold hover:border-b-2 w-fit space-y-2 duration-200 py-1">
                {title}
                </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
