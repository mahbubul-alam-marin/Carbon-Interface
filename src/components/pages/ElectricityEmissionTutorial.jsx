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

          <h1 className='px-10 text-5xl'>Electricity Estimate Tutorial</h1>
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
     
     {/** secton 02 */}

     <section className='py-10'>
      <div className='px-10'>
        <h1 className='text-5xl py-5'>Authentication</h1>
        <h3 className='text-2xl pb-4'>API Key</h3>
        <p className='text-lg pb-8'>
        To generate emissions estimates from the Carbon Interface API, you need your API key. To get an API key,
         <span className='text-blue-500'> create a Carbon Interface account </span> and copy your API key from the 
         <span className='text-blue-500'>API Key </span>  section of your account into the authentication steps detailed below.
        </p>

        <h1 className='text-2xl pb-4'>Testing your API Key</h1>
        
        <p className='text-lg pb-4'>To test your API key, make a request to the
           <span className='bg-gray-300 text-sm rounded px-3 py-0.5'>/auth</span>  endpoint. Make sure to use Bearer authentication and replace
            <span className='bg-gray-300 rounded px-3 py-0.5 text-sm'>API_KEY</span>  with the API key you copied from your account.</p>

        <pre className="language-bash bg-[#2D2D2D] text-gray-300 p-4 rounded">
  <code className="language-bash text-md w-md">
    curl "https://www.carboninterface.com/api/v1/auth" <br />  -H "Authorization: Bearer API_KEY"
  </code>
</pre>

<p className='text-lg py-4'>
If you receive a <span className='bg-gray-300 text-sm rounded px-3 py-0.5'> "message": "auth successful"</span> response then your API key is valid and you can move forward with your integration.
 If you don't receive a <span className='bg-gray-300 text-sm rounded px-3 py-0.5'> "message": "auth successful" </span> response, go back into your <span className='text-blue-500'> Carbon Interface account</span>
  and ensure you are copying and pasting your API key correctly.
</p>


<h1 className='text-5xl py-5'>Generating an estimate</h1>
<h1 className='text-2xl pb-4'>Selecting your country and state</h1>

<p className='text-lg pb-4'>

To generate an electricity emissions estimate you need to specify the region that you want an electricity emissions estimate from.
Every region that Carbon Interface has emissions data on (US States and Canadian Provinces) emit different levels of emissions to generate
electricity. Enter the two character <span className='text-blue-500'>state</span> and <span className='text-blue-500'>country</span> codes in the <span className='bg-gray-300 text-sm rounded px-3 py-0.5'>country</span> and <span className='bg-gray-300 text-sm rounded px-3 py-0.5'>state</span> attributes in your POST request.
</p>
<p className='text-lg pb-4'>
In this example, we want to obtain an electricity generation emissions estimate for generating electricity in the US state of Florida.We are setting the <span className='bg-gray-300 text-sm rounded px-3 py-0.5'>country</span>  attribute to <span className='bg-gray-300 text-sm rounded px-3 py-0.5'>us</span>  and the <span className='bg-gray-300 text-sm rounded px-3 py-0.5'>state</span>  attribute to <span className='bg-gray-300 text-sm rounded px-3 py-0.5'>fl.</span> 
</p>

<pre className="language-bash bg-[#2D2D2D] text-gray-300 p-4 rounded">
  <code className="language-bash text-md w-md">
  "country": "us", <br />
  "state": "fl"
  </code>
</pre>


<h1 className='text-2xl pt-8'>Selecting your electricity inputs</h1>

<p className='text-lg py-4'>
To complete the body of the POST request to generate an electricity emissions estimate you need to specify the amount of electricity consumed and the unit. By default, <span className='bg-gray-300 text-sm rounded px-3 py-0.5'> electricity_unit</span>  is set to <span className='bg-gray-300 text-sm rounded px-3 py-0.5'>kwh.</span>  However, if you'd prefer to use <span className='bg-gray-300 text-sm rounded px-3 py-0.5'>mwh</span> you can set that as the value of <span className='bg-gray-300 text-sm rounded px-3 py-0.5'> electricity_unit.</span>
</p>

<pre className="language-bash bg-[#2D2D2D] text-gray-300 p-4 rounded">
  <code className="language-bash text-md w-md">
  "electricity_value": 42, <br />
"electricity_unit": "mwh"
  </code>
</pre>




 <h1 className='text-2xl pt-10 pb-2'>Making your request</h1>
<p className='text-lg pb-6'>
With all the parameters of our POST request set, we're ready to generate our emissions estimate! The request needs to be made to <span className='bg-gray-300 text-sm rounded px-3 py-0.5'> https://www.carboninterface.com/api/v1/estimates </span> in order to receive a response.
</p>

<pre className="language-bash bg-[#2D2D2D] text-gray-300 p-4 rounded">
  <code className="language-bash text-md w-md">
    {`curl "https://www.carboninterface.com/api/v1/estimates"
-H "Authorization: Bearer API_KEY"
-H "Content-Type: application/json"
-X POST
-d {
      "type": "electricity",
      "electricity_unit": "mwh",
      "electricity_value": 42,
      "country": "us",
      "state": "fl"
    }`}
  </code>
</pre>


<h1 className='text-2xl pt-10 pb-2'>Handling the response</h1>
<p className='text-lg pb-6'>
When you make a successful request to the estimates API you will receive a JSON response that includes the following:
</p>


<pre className="language-bash bg-[#2D2D2D] text-gray-300 p-4 rounded">
  <code className="language-bash text-md w-md">
    {`{
  "data": {
    "id": "2d968fce-859d-4dc1-9489-987e795f42bb",
    "type": "estimate",
    "attributes": {
      "country": "us",
      "state": "fl",
      "electricity_unit": "mwh",
      "electricity_value": "42.0",
      "estimated_at": "2020-07-24T02:23:24.441Z",
      "carbon_g": 18051428,
      "carbon_lb": 39796,
      "carbon_kg": 18051,
      "carbon_mt": 18
    }
  }
}`}
  </code>
</pre>

<p className='text-lg py-6'>
  The response will include all of the original parameters that were sent in the request, in addition to <span className='bg-gray-300 text-sm rounded px-3 py-0.5'> id </span>, <span className='bg-gray-300 text-sm rounded px-3 py-0.5'> estimated_at </span>, <span className='bg-gray-300 text-sm rounded px-3 py-0.5'> carbon_g</span >, <span className='bg-gray-300 text-sm rounded px-3 py-0.5'> carbon_lb</span>, <span className='bg-gray-300 text-sm rounded px-3 py-0.5'> carbon_kg</span> and <span className='bg-gray-300 text-sm rounded px-3 py-0.5'> carbon_mt</span> that are all nested under the <span className='bg-gray-300 text-sm rounded px-3 py-0.5'> attributes</span> key.
  </p>

<p className='text-lg pb-4'>
Now you can use the data in the response to display the emissions estimate to your users or include in other calculations.
</p>



<h1 className='text-5xl py-4 '>Next steps</h1>

<h2 className='text-2xl'>API Docs</h2>
<p className='text-lg py-4'>
For more information on how the Carbon Interface API works, visit out <a href="" className='text-blue-500 hover:border-b-2 w-fit'> developer documentation.</a>
</p>

<h2 className='text-2xl'>Community</h2>
<p className='text-lg py-4'>
The community of developers using Carbon Interface to generate emissions estimates is growing every day. <a href="" className='text-blue-500 hover:border-b-2 w-fit '> Join our Discord Server </a> to ask questions or provide feedback to the Carbon Interface team
</p>

<h2 className='text-2xl'>Feedback</h2>
<p className='text-lg py-4'>
If you have ideas to improve this tutorial,  please let us know at <a href="" className='text-blue-500 hover:border-b-2 w-fit '> hello@carboninterface.com.</a>
</p>



      </div>
     </section>


    </div>
  );
}

export default ElectricityEmissionTutorial
