import React from 'react'
import { Link } from 'react-router-dom';
import CarbonLed from '../../assets/picture/CarbonLedger.svg'

const CarbonLedger = () => {
  return (

     <div>

      {/**sections 01 */}
    <section>
        <div className="bg-gray-950 [background-image:radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:10px_10px] py-30 text-center">
      <h1 className="text-gray-200 text-7xl font-light">
        Measure the climate <br /> impact of transaction data
      </h1>
      <p className="text-gray-400 text-2xl px-2 py-10 max-w-3xl mx-auto text-center">
        We make it possible to understand the impact your customers' purchases are having on the climate
      </p>

      <Link to="/register">
                    <button className="bg-purple-500 font-semibold p-2 text-white px-6 py-3 rounded-lg hover:bg-purple-600 cursor-pointer transition-all">
                        Get Started for free
                    </button>
                </Link>
    </div>

    </section>

    {/** Sections 02 */}

    <div>
        <div>
            <img src={CarbonLed} alt="" />
        </div>
    </div>




     </div>
    
    
  );
};

export default CarbonLedger;
