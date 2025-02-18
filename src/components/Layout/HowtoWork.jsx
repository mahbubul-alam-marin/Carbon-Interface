import React from 'react'
import code from '../../assets/picture/code.jpg'

const HowtoWork = () => {
  return (
    <div>
      <div className='container'>
            <div className='text-center pb-10'>
                <span className=' text-blue-400 bg-gray-200 text-xs rounded-2xl uppercase  px-2 py-1 text-center'>How it work</span>
                <h1 className=' text-4xl py-5'>Climate-conscious apps as easy as <span className='text-blue-600'>API</span></h1>
                <p className='text-gray-500 pb-5 text-2xl'>Plug-in the Carbon Interface API to power your electricity emissions estimates</p>
            </div>

            <div className='flex items-center text-center p-5'>
                <div className='flex flex-col pl-30'>
                    <img src={code} alt="" className='max-w-lg' />

                </div>
                <div className='flex flex-col px-20'>
                    <div className='flex py-5'>
                        <div className='flex flex-col py-5'>
                            <span className=' text-blue-700 bg-gray-300 rounded-2xl px-2'>1</span>
                        </div>
                        <div className='flex flex-col text-left pl-10'>
                            <h1 className='text-2xl py-4'>Provide details</h1>
                            <p className='text-gray-500 text-sm max-w-sm'>
                            Enter your location (country, state or province) and the amount of electricity consumed in kwh or mwh
                            </p>
                        </div>

                    </div>
                    <div className='flex py-5'>

                        <div className='flex flex-col py-5'>
                            <span className=' text-blue-700 bg-gray-300 rounded-2xl px-2'>2</span>
                        </div>
                        <div className='flex flex-col text-left pl-10'>
                            <h1 className='text-2xl py-4'>Make the request</h1>
                            <p className='text-gray-500 text-sm max-w-sm'>
                            
                            Using your programming language of choice, make the request to the Carbon Interface API
                            </p>
                        </div>

                    </div>
                    <div className='flex py-5'>
                        <div className='flex flex-col py-5'>
                            <span className=' text-blue-700 bg-gray-300 rounded-2xl px-2'>3</span>
                        </div>
                        <div className='flex flex-col text-left pl-10'>
                            <h1 className='text-2xl py-4'>Receive CO2 emissions estimate</h1>
                            <p className='text-gray-500 text-sm max-w-sm'>
                            
                                Using the most up-to-date data sources and calculation methodology we will respond to your request with the amount of CO2 emitted
                            </p>
                        </div>

                    </div>

                      
                </div>

            </div>

        </div>
    </div>
  )
}

export default HowtoWork
