import React from 'react'
import { ChevronRight, ChevronLeft } from "lucide-react";
import {  } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ElectricityEmissionTutorial = () => {
  return (
    <div className='px-30'>
      <section className='py-10'>
        <div className=''>
          <nav className="py-8 px-10 text-gray-500">

            <ol className="flex items-center space-x-2">

              <Link to="/tutorials" className="flex items-center space-x-1">

                <li className="cursor-pointer hover:border-b-1 duration-75 ">Tutorials</li>
                <ChevronRight className="w-5 h-5" />
              </Link>
              <li>Electricity Emissions</li>
            </ol>
          </nav>

          <h1 className='px-10 text-4xl'>Electricity Estimate Tutorial</h1>
          <p className='px-10 text-gray-500 text-lg py-5'>
            The electricity emissions tutorial will show you how to integrate
            the Carbon Interface API into your apps to obtain CO2 emissions
            estimates for electricity generation. This tutorial has been created
            from examples provided in the  <span className='text-blue-700 hover:border-b-1 cursor-pointer text-2xl '>  API docs.</span>
          </p>

          <div className='px-10 text-gray-500 py-4'>
            <time datetime="2021-01-10">Last updated : October 2,2021</time>
          </div>
           
           

        </div>
      </section>
    </div>
  );
}

export default ElectricityEmissionTutorial
