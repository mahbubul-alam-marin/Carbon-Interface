import React from 'react'
import { Link } from 'react-router-dom'
import HowtoWork from '../Layout/HowtoWork'
import HeroLayer from '../Layout/HeroLayer'
import ship from '../../assets/picture/shipping01.jpg'

const Shipping = () => {
  return (
    <div className='container'>
        <section className="pt-4 pt-md-11">
        <div className="flex items-center p-10">
          <div className="flex-auto items-center space-y-2 pl-30">
            <h1 className="text-5xl  py-2 px-2">
            Logistics and Shipping 
            </h1>
              <span className="text-blue-600 text-5xl">CO2 Estimates</span>
            
            <p className="text-center text-gray-500 text-md py-8 font-muted max-w-88">
             
            Easily calculate the CO2 emissions from shipping freight via ship, train, truck and plane
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
            <img src={ship} alt="" />
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

export default Shipping
