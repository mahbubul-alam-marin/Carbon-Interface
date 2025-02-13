import React from "react";
import Img1 from "../assets/picture/Carbon offset.jpg";
import Img2 from "../assets/picture/purchases.jpg";
import Img3 from "../assets/picture/shipping.jpg";
import { FaCheck, FaCoffee } from "react-icons/fa";

const Home = () => {
  const features = [
    {
      title: "Easy to use REST API",
      description:
        "Access Carbon Interface using any framework or language Interface using any framework or language.",
    },
    {
      title: "Monitoring Dashboard",
      description: "View estimates in your custom Dashboard.",
    },
    {
      title: "Accurate Estimates",
      description:
        "Estimates are calculated using the latest data and methodologies.",
    },
  ];

  return (
    <>
      {/*  sections 01   */}
      <section className="py-12 py-md-10 border-b-0">
        <div className="text-center mx-5 p-16 ">
          <h1 className="text-7xl font-bold p-5">
            Measure carbon emission with an API
          </h1>
          <p className="text-gray-500 text-3xl pb-10">
            Developers use Carbon Interface to power carbon measurement in their
            apps to <br /> combat climate change.
          </p>
          <button className="bg-blue-600 font-bold text-2xl p-3 text-yellow-50 rounded-md cursor-pointer hover:scale-110 duration-300">
            {" "}
            Get Started for Free
          </button>
        </div>
      </section>
      {/*.2nd sections. */}
      <section className="pt-10 pt-md-11 border-b-0">
        <div className="container">
          <div className="text-center mx-3 py-5">
            <span className="h-6 inline-block px-3 font-medium rounded-full uppercase bg-green-100 text-green-700 mb-3">
              estimate Types
            </span>

            <h2 className="text-5xl font-bold">
              Common Carbon Emitting Activities
            </h2>
            <p className="text-2xl text-gray-500 py-5">
              Obtain estimates for common emission-product activities with{" "}
              <br /> more coming soon
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 px-5 text-center">
          <div className="flex flex-col items-center text-center space-y-2">
            <h1 className="p-5 text-3xl">⚡</h1>
            <a href="">
              <h2 className="text-xl font-semibold text-blue-600 hover:border-b-2 duration-100">
                Electricity
              </h2>
            </a>
            <p className="text-gray-500 text-sm max-w-xs">
              Estimates the carbon emissions of the power generation mix in the
              country or state provided in the request.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-2">
            <h1 className="p-5 text-3xl">✈️</h1>
            <a href="">
              <h2 className="text-xl font-semibold text-blue-600 hover:border-b-2 duration-100">
                Passenger Flights
              </h2>
            </a>
            <p className="text-gray-500 text-sm max-w-xs">
              Estimates the carbon emissions based on a number of passengers and
              distance between airports.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-2">
            <h1 className="p-5 text-3xl">🛳️</h1>
            <a href="">
              <h2 className="text-xl font-semibold text-blue-600 hover:border-b-2 duration-100">
                Shipping
              </h2>
            </a>
            <p className="text-gray-500 text-sm max-w-xs">
              Estimates the carbon emissions that are generated from shipping
              goods between two locations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 px-5 text-center pt-5">
          <div className="flex flex-col items-center text-center space-y-2">
            <h1 className="p-5 text-3xl">🚗</h1>
            <a href="">
              <h2 className="text-xl font-semibold text-blue-600 hover:border-b-2 duration-100">
                Vehicles
              </h2>
            </a>
            <p className="text-gray-500 text-sm max-w-xs">
              Estimate the carbon emissions generated from operating more than
              42,000 different vehicle models
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-2">
            <span className="p-5 text-3xl">⛽</span>
            <a href="">
              <h2 className="text-xl font-semibold text-blue-600 hover:border-b-2 duration-100">
                Fuel Combustion
              </h2>
            </a>
            <p className="text-gray-500 text-sm max-w-xs">
              Carbon emissions from static fuel combustion of over 12+ fuel
              sources in both volume and BTU
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-2">
            <h1 className="p-5 text-3xl">💳</h1>
            <a href="">
              <h2 className="text-xl font-semibold text-blue-600 hover:border-b-2 duration-100">
                Financial Transactions
              </h2>
            </a>
            <p className="text-gray-500 text-sm max-w-xs">
              Our Carbon Ledger product measures the climate impact of
              transaction data
            </p>
          </div>
        </div>
      </section>
      {/*  3rd sections*/}\
      <section className="pt-10 pt-md-11 border-b-0">
        <div className="pb-8">
          <div className="text-center mx-3 py-5">
            <span className="h-6 inline-block px-3 font-medium rounded-full uppercase bg-green-100 text-green-700 mb-3">
              used cases
            </span>

            <h2 className="text-5xl font-bold">
              Combat Climate Change with{" "}
              <span className="text-blue-500">Your Product</span>
            </h2>
            <p className="text-2xl text-gray-500 py-10">
              Carbon Interface makes it easy to integrate accurate carbon
              emissions <br /> estimates into today's products.
            </p>
          </div>

          <div className="grid grid-cols-3 py-10 text-center">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 lg:mb-0 shadow-lg">
                <img
                  className="w-full h-48 object-cover rounded-t-2xl rounded-br-2xl"
                  src={Img1}
                  alt="picture"
                  style={{
                    clipPath:
                      "polygon(0% 0%, 100% 0%, 100% 68%, 74% 84%, 60% 90%, 40% 96%, 30% 98%, 0% 100%)",
                  }}
                />
              </div>

              <div className="py-8 mx-2 space-y-2">
                <h2 className=" p-2 text-xl font-semibold text-gray-700 hover:border-b-2 duration-100">
                  Carbon offset purchases
                </h2>
                <p className="text-gray-500 text-sm max-w-xs">
                  Estimate how much carbon your users need to offset from carbon
                  emitting activities
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-6 lg:mb-0 shadow-lg">
                <img
                  className="w-full h-48 object-cover rounded-t-2xl rounded-br-2xl"
                  src={Img2}
                  alt="picture"
                  style={{
                    clipPath:
                      "polygon(0% 0%, 100% 0%, 100% 68%, 74% 84%, 60% 90%, 40% 96%, 30% 98%, 0% 100%)",
                  }}
                />
              </div>

              <div className="pt-8 mx-2 space-y-2">
                <h2 className=" p-2 text-xl font-semibold text-gray-700 hover:border-b-2 duration-100">
                  Carbon offset purchases
                </h2>
                <p className="text-gray-500 text-sm max-w-xs">
                  Estimate how much carbon your users need to offset from carbon
                  emitting activities
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-6 lg:mb-0 shadow-lg">
                <img
                  className="w-full h-48 object-cover rounded-t-2xl rounded-br-2xl"
                  src={Img3}
                  alt="picture"
                  style={{
                    clipPath:
                      "polygon(0% 0%, 100% 0%, 100% 68%, 74% 84%, 60% 90%, 40% 96%, 30% 98%, 0% 100%)",
                  }}
                />
              </div>

              <div className="pt-8 mx-2 space-y-2">
                <h2 className=" p-2 text-xl font-semibold text-gray-700 hover:border-b-2 duration-100">
                  Carbon offset purchases
                </h2>
                <p className="text-gray-500 text-sm max-w-xs">
                  Estimate how much carbon your users need to offset from carbon
                  emitting activities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 4th sections */}
      <section className="">
        <div className="bg-[#161C2D] text-center space-y-2 py-20 ">
          <div className="pt-10">
            <p className="text-blue-700 uppercase text-xs p-5 font-bold">
              data sources & methodology
            </p>
            <h2 className="text-white text-4xl font-bold">
              Leverage Leading Emissions Data
            </h2>
            <p className="text-gray-500 p-10">
              Data that powers Carbon Interface is sourced and versioned from{" "}
              <br />
              governments, non-profits and leading reseachers around the world.{" "}
            </p>
          </div>

          <div className="grid grid-cols-3 text-center p-10">
            <div className="flex flex-col text-center max-w-xs">
              <h1 className="text-white p-5 text-lg font-semibold">EPA</h1>
              <p className="text-gray-500">
                Annual EPA eGrid data is used to calculate electricity
                generation emissions
              </p>
            </div>

            <div className="flex flex-col text-center max-w-xs">
              <h1 className="text-white p-5 text-lg font-semibold">
                GHG Protocol
              </h1>
              <p className="text-gray-500">
                Emissions factors of GHG Emissions from Transport or Mobile
                Sources
              </p>
            </div>

            <div className="flex flex-col text-center max-w-xs">
              <h1 className="text-white p-5 text-lg font-semibold">
                Environment Canada{" "}
              </h1>
              <p className="text-gray-500">
                GHG Inventories from Environment Canada are used to calculate
                electricity generation emissions
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* sections 5 */}
      <section className="pt-10 ">
        <div className="text-center mx-3">
          <span className="p-2 rounded-full uppercase bg-green-100 text-blue-400 mb-3">
            Pricing
          </span>

          <h2 className="text-3xl py-4">
            Accurate Estimates for Products of
            <span className="text-blue-500"> All Sizes</span>
          </h2>
          <p className="text-2xl text-gray-500 pb-4">
            Add accurate carbon emission estimates to your app for a fraction of{" "}
            <br /> the cost it would take to develop your own.
          </p>
        </div>

        <div className="grid grid-cols-3 text-center min-h-screen">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="p-8 rounded-2xl shadow-lg text-center w-80">
              <span className="bg-blue-200 text-blue-700 px-2 py-1 rounded-full text-sm uppercase">
                HOBBY
              </span>
              <h1 className="text-4xl font-bold p-5">Free</h1>
              <ul className="mt-4 space-y-2 text-lg text-left">
                <li>✔️ 200 requests / month</li>
                <li>✔️ REST API</li>
                <li>✔️ Monitoring Dashboard</li>
                <li>✔️ No setup fee</li>
                <li>✔️ 256-bit encryption</li>
              </ul>
              <button className="mt-6 bg-blue-600 text-white font-bold py-2 px-4 rounded text-lg hover:bg-blue-700">
                Get started for free
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center  text-center">
            <div className="p-8 rounded-2xl shadow-lg text-center w-80">
              <span className="bg-blue-200 text-blue-700 px-2  py-1 rounded-full text-sm uppercase">
                startup
              </span>
              <h1 className="text-2xl font-bold pt-5">
                <span className="text-5xl px-1 ">$30</span>/mo
              </h1>
              <p className="text-gray-400">per month</p>
              <ul className="mt-4 space-y-2 text-lg text-left">
                <li>✔️ 5000 requests / month</li>
                <li>✔️ REST API</li>
                <li>✔️ Monitoring Dashboard</li>
                <li>✔️ No setup fee</li>
                <li>✔️ 256-bit encryption</li>
                <li>✔️ Dedicated support</li>
              </ul>
              <button className="mt-6 bg-blue-600 text-white font-bold py-2 px-4 rounded text-lg hover:bg-blue-700">
                Get started
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center  text-center shadow-amber-50">
            <div className="p-8 rounded-2xl shadow-lg text-center w-80">
              <span className="bg-blue-200 text-blue-700 px-2 py-1 rounded-full text-sm uppercase">
                business
              </span>
              <h1 className="text-2xl font-bold pt-5">
                <span className="text-5xl px-1 ">$250</span>/mo
              </h1>
              <p className="text-gray-400">per month</p>
              <ul className="mt-4 space-y-2 text-lg text-left">
                <li>✔️ 200 requests / month</li>
                <li>✔️ REST API</li>
                <li>✔️ Monitoring Dashboard</li>
                <li>✔️ No setup fee</li>
                <li>✔️ 256-bit encryption</li>
                <li>✔️ Integration support</li>
                <li>✔️ Integration support</li>
              </ul>
              <button className="mt-6 bg-blue-600 text-white font-bold py-2 px-4 rounded text-lg hover:bg-blue-700">
                Get started
              </button>
            </div>
          </div>
        </div>
      </section>
      {/**   sections 6th */}
      <section className="py-10">
        <div className="grid grid-cols-2 items-center px-10">
          <div className="flex flex-col pl-30">
            <div className="pb-4">
              <span className="text-green-800 rounded-full bg-green-200 uppercase py-1 px-2 text-xs ">
                besefits
              </span>
            </div>
            <h1 className="text-3xl font-bold pb-5 ">
              <span className="text-green-800">Don't re-invent the wheel</span>
              <br /> with your own emission estimates
            </h1>

            <p className="text-gray-500">
              Focus your time on your product and customers <br /> and leave the
              CO2 estimates to us.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 border-t-2 border-green-300 max-w-md">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-4 border-b-gray-600 last:border-none"
              >
                <div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-gray-500 text-sm">{feature.description}</p>
                </div>

                <FaCheck
                  className="text-green-300 bg-green-100  flex-shrink-0"
                  size={20}
                />
              </div>
            ))}
          </div>
        </div>
      </section>



      {/** 7th sections */}


      <section className="pt-10">
        
        <div className="flex bg-gray-900 px-10  p-10">
          <div className="flex-auto p-5 pl-30 border-b w-fit ">
            <h1 className="text-2xl text-white font-bold pb-2">
              Add emissions estimates to your app today.
            </h1>
            <p className="text-gray-500">
              Focus on your product and customer and leave the emissions to us.
            </p>
          </div>
          <div className="flex-auto p-5 border-b w-fit">
            <a href="">
              {" "}
              <button className=" bg-blue-600 text-white font-bold py-2 cursor-pointer px-4 rounded text-lg hover:bg-blue-700">
                Get started for free
              </button>
            </a>
          </div>
        </div>


      </section>
    </>
  );
};

export default Home;
