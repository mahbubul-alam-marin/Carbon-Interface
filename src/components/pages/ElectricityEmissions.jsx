import React from "react";
import ElectricPlant from "../../assets/picture/electric.svg";
import { Link } from "react-router-dom";
import HeroLayer from "../Layout/HeroLayer";
import HowtoWork from "../Layout/HowtoWork";

const ElectricityEmissions = () => {
  return (
    <div className="container">
      <section className="pt-4 pt-md-11">
        <div className="flex items-center p-10">
          <div className="flex-auto items-center space-y-2 pl-30">
            <h1 className="text-5xl  py-5 px-2">
              Electricity <br /> Consumption <br />{" "}
              <span className="text-blue-600">CO2 Estimates</span>{" "}
            </h1>
            <p className="text-center text-gray-500 text-md pb-8 font-muted max-w-88">
              Easily generate CO2e emissions estimates from electricity
              consumption in North America and Europe
            </p>
            <div className="space-x-3">
              <Link>
                <button className="bg-blue-600 text-2xl px-5 py-2 rounded cursor-pointer text-white  hover:bg-blue-700">
                  Get started for free
                </button>
              </Link>
              <Link>
                <button className="bg-gray-300 text-2xl px-5 py-2 cursor-pointer rounded text-blue-700  hover:bg-gray-400">
                  Documentation
                </button>
              </Link>
            </div>
            <div className="py-4">
              <a
                href="https://faint-class-d56.notion.site/4b4f41db73254b4b915ba01d55eba7e7?v=4ad0efe7763540ab801fadd9f3bf1ce0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:border-b-2 hover:border-blue-600 w-fit duration-200"
              >
                View Geographic Coverage
              </a>
            </div>
          </div>

          <div className="flex-auto items-center px-20 m-5">
            <img src={ElectricPlant} alt="" className="fill-red-400 stroke-orange-200 w-100 h-100 text-amber-200" />
          </div>
        </div>
      </section>

      {/** sections 2nd */}

      <section className="pt-8 pt-md-11">
        <HowtoWork />
      </section>

      {/** sections 4 & 5 */}
      <section className="pt-8 pt-md-11">
        <HeroLayer />
      </section>
    </div>
  );
};

export default ElectricityEmissions;
