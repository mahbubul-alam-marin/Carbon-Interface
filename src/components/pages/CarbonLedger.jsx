import React from 'react'
import { Link } from 'react-router-dom'
import CarbonLed from '../../assets/picture/3dPic.jpg'
import privacy from '../..//assets/picture/privacy.jpg'
import api from '../../assets/picture/API.jpg'
import profile from '../../assets/picture/profile.jpg'
import dataset from '../../assets/picture/dataset.jpg'
import backed from '../../assets/picture/backed.jpg'
import database from '../../assets/picture/database.jpg'
import usrsShow from '../../assets/picture/showUsers.jpg'
import soler from '../../assets/picture/solerpanel.jpg'
import world from '../../assets/picture/oneword.jpg'

const CarbonLedger = () => {

  const cardData = [
    {
      id: 1,
      image: privacy,
      title: "Privacy is #1",
      description: "We don't store any PII on your customers",
    },
    {
      id: 2,
      image: api,
      title: "API-first",
      description: "Easily integrate with our REST API in hours, not weeks",
    },
    {
      id: 3,
      image: profile,
      title: "Profiles",
      description: "Improve estimate accuracy by building spend profiles",
    },
    {
      id: 4,
      image: dataset,
      title: "Rich Dataset",
      description: "We can estimate the emissions from any purchase, yes.. any",
    },
    {
      id: 5,
      image: backed,
      title: "Backed by Research",
      description: "Our models were developed with leading climate research groups",
    },
    {
      id: 6,
      image: database,
      title: "Brand Database",
      description: "Carbon neutral brand database to reflect responsible purchases",
    }
  ]

  return (
    <div className="">
      {/**sections 01 */}
      <section className="bg-gray-950 [background-image:radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:10px_10px] text-center">
        <div>
          <h1 className="text-gray-200 text-7xl font-light">
            Measure the climate <br /> impact of transaction data
          </h1>
          <p className="text-gray-400 text-2xl px-2 py-10 max-w-3xl mx-auto text-center">
            We make it possible to understand the impact your customers'
            purchases are having on the climate
          </p>

          <Link to="/register">
            <button className="bg-purple-500 font-semibold p-2 text-white px-6 py-3 rounded-lg hover:bg-purple-600 cursor-pointer transition-all">
              Get Started for free
            </button>
          </Link>
        </div>
      </section>

      {/** Sections 02 */}

      <section className="bg-gray-950 [background-image:radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:10px_10px] py-10 text-center">
        <div>
          <div className="py-5 px-10">
            <img src={CarbonLed} alt="" />
          </div>
        </div>
      </section>

      {/** sections 03 */}

      <section className="bg-[#161C2D] py-10">
        <div className="text-center text-white pt-20">
          <span className="text-[#42BA96] uppercase text-xs rounded-2xl bg-[#42BA961A] px-2 py-1">
            features
          </span>
          <h1 className="py-5 text-5xl">
            Payments, meet Climate <br /> Action
          </h1>
          <p className="py-5 text-2xl mb-10">
            We make it easy to derive emissions data from credit card
            transactions
          </p>
        </div>

        <div class="grid grid-cols-3 gap-6 px-20 py-5">

        
        {cardData.map((card) => (
        <div key={card.id} className="bg-blue-950 rounded-2xl">
          <div className="pt-10 px-5">
            <img src={card.image} alt="card illustration" />
          </div>
          <div className="text-white py-8 px-5">
            <h1 className="pb-3 text-3xl">{card.title}</h1>
            <p className="text-gray-500">{card.description}</p>
          </div>
        </div>
      ))}

      </div>

      </section>
     

     {/** sections 04 */}

     <section className='bg-[#161C2D] py-10'>

      <div className='grid grid-cols-2  text-white px-20 py-5'>

       <div className=''>
         <span className='text-[#42BA96] uppercase text-xs rounded-2xl bg-[#42BA961A] px-2 py-1'>use cases</span>
         <h1 className='py-5 text-5xl w-lg font-semibold '>Show users their emissions. </h1>

         <p className='py-5 text-2xl text-gray-500'>
         <span className='text-white'>Track & Notify.</span> Show users the carbon footprint of their transactions immediately to drive behavioural change.
         </p> 
          <p className='py-5 text-2xl text-gray-500'>
          <span className='text-white'>A positive feedback loop.</span> Show clients when they made a purchase from a merchant who has a carbon reduction commitment.
          </p>

       </div>
       <div className='pt-10'>
        
          <img src={usrsShow} alt="" />
        
       </div>


      </div>
      </section>   


      {/** sections 05 */}

      <section className='bg-[#161C2D] py-10'>

      <div className='grid grid-cols-2  text-white px-20 py-5'>

      <div className='pt-10 '>
        
        <img src={soler} alt="picture" />
      
     </div>

       <div className='pl-20'>
           <h1 className='py-5 text-5xl w-lg font-semibold '>Drive adoption of climate-friendly products. </h1>

         <p className='py-5 text-2xl text-gray-500 w-md'>
         <span className='text-white'>Inspire.</span>  With emissions information, customers will be inspired to make changes, including in their portfolios and other banking products.
         </p> 
          <p className='py-5 text-2xl text-gray-500 w-md'>
          <span className='text-white'>Cross-sell.</span>  Sell ESG funds and other climate-friendly products to engaged customers.
          </p>

       </div>
       


      </div>
      </section> 

      {/** secctions 06 */}

      <section className='bg-[#161C2D] py-10'>

      <div className='grid grid-cols-2  text-white px-20 py-5'>

      

       <div className='pl-20'>
           <h1 className='py-5 text-5xl w-lg font-semibold '> Differentiate your brand. </h1>

         <p className='py-5 text-2xl text-gray-500 w-md'>
         <span className='text-white'>Differentiate.</span> Leverage Carbon Ledger to build deeper affinity for your brand by embedding your values in your product.
         </p> 
          <p className='py-5 text-2xl text-gray-500 w-md'>
          <span className='text-white'>Alignment.</span>   70% of consumers in North America believe it's important for a brand to be sustainable and have environmental commitments - be an early adopter and target these consumers.
          </p>

       </div>
       <div className='pt-10 '>

      
 


        
        <img src={world} alt="picture" />
      
     </div>
       


      </div>
      </section> 

      {/** sections 07 */}

      <section className='bg-[#161C2D] py-10'>
        <div  className='text-center px-10 py-20 text-white'>
          <span className=' text-[#7C69EF] uppercase text-xs'>Let's get to work</span>

          <p
           className='pt-10  text-6xl '> Start building for the <br /> planet.
           </p>

          <p className='text-gray-400 text-lg py-5'>
          We'll handle the transactional emission data so you can focus on your customers.
          </p>
          
          <div className="py-10">

                <Link to="/register">
                <button className="bg-[#7C69EF] text-2xl rounded px-5 py-2 cursor-pointer text-white  hover:bg-[#4a4277]">
                  Get started for free
                </button>
                </Link>
            </div>

             
            
        </div>
      
      </section>


    </div>
  );
};

export default CarbonLedger;
