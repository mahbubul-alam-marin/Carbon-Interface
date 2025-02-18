import React from 'react';
import { Link } from "react-router-dom";
import { FaCheck, FaCoffee } from "react-icons/fa";

const HeroLayer = () => {

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
    <div>

        
        <section className='py-10'>
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
              <ul className="mt-4 space-y-2 text-lg text-left pb-4">
                <li>✔️ 200 requests / month</li>
                <li>✔️ REST API</li>
                <li>✔️ Monitoring Dashboard</li>
                <li>✔️ No setup fee</li>
                <li>✔️ 256-bit encryption</li>
              </ul>
              <Link to="/register">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all">
                        Get Started
                    </button>
                  </Link>
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

        <section className="pb-20 pt-10">
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
      
    </div>
  )
}

export default HeroLayer
