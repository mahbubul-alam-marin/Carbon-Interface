import React from 'react'
import { Link } from 'react-router-dom'
import fly from '../../assets/picture/flights.jpg'
import HowtoWork from '../Layout/HowtoWork'
import HeroLayer from '../Layout/HeroLayer'

const Flights = () => {
  return (
    <div className='container'>
        <section className="pt-4 pt-md-11">
        <div className="flex items-center p-10">
          <div className="flex-auto items-center space-y-2 pl-30">
            <h1 className="text-5xl  py-1 px-2">
            Passenger flights
             </h1>
            <span className="text-blue-600 text-5xl px-2">
              CO2 Estimates
            </span>
            <p className="text-center text-gray-500 text-lg py-8 font-muted max-w-88">
            

Easily generate accurate CO2 emissions estimates from passenger flights
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
              
            </div>
          </div>

          <div className="flex-auto items-center px-20 m-5">
            <img src={fly} alt="" />
          </div>
        </div>
      </section>

      <section className='pt-8 pt-md-11'>
        
        <HowtoWork/>
      </section>
 

 {/** sections 4 & 5 */}
      <section className='pt-8 pt-md-11'>
       <HeroLayer/>

      </section>
      
    </div>
  )
}

export default Flights
