import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import logo from "../assets/picture/logo.png"

const Footer = () => {
  const products = [
    {
      id: 1,
      title: "Carbon Ledger",
    },
    { 
      id: 2,
      title: "Electricity Emissions"
     },
     { 
      id: 3,
      title: "Flight Emissions"
     },
     { 
      id: 4,
      title: "Vehicle Emissions"
     },
     { 
      id: 5,
      title: "Shipping Emissions"
     },
     { 
      id: 6,
      title: "Fuel Combustion Emissions"
     },
     {
      id:7,
      title:"Methodologies" 
     }
  ];

  const Developers=[
    {id:1,
      title:"Documentation"
    },
    {id:2,
      title:"Discord Community"
    },
    {id:3,
      title:"Electricity Emissions Tutorial"
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
    <div className="bg-gray-900 grid grid-cols-4 px-5 text-center text-gray-500 pb-20">
      <div className="flex flex-col px-2">

        <div className="flex space-x-2 px-10 pb-2">
                <img src={logo} alt="Carbon Interface Logo" className="h-8" /> 
              </div>
              <div className="flex px-10 text-left">
              <p>The emissiond estimation platform.</p>
              </div>
              

        <div >
          
        </div>
      </div>

      {/**product */}
      <div className="flex flex-col">
        <span className="font-semibold text-xs text-gray-400 uppercase text-left pb-2">
          product
        </span>
        <ul>
          {products.map(({id, title }) => (
            <a href="">
              <li key={id}
                className="font-semibold hover:border-b-2 w-fit space-y-2 duration-200 py-1"
              >
                {title}
              </li>
            </a>
          ))}
        </ul>
      </div>

      {/* Developer*/}

      <div className="flex flex-col">
        <span className="font-semibold text-sm text-gray-400 uppercase text-left pb-2">
          developer
        </span>
        <ul>
          {Developers.map(({id, title}) => (
            <a href="">
              <li
                key={id}
                className="font-semibold hover:border-b-2 w-fit space-y-2 duration-200 py-1"
              >
                {title}
              </li>
            </a>
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
