import React from 'react'
import Navbar from '../components/Navbar.jsx'
import homelogo from '../assets/homeIMG.png';
import {Link} from 'react-router-dom';
import Homecards from '../components/Homecards.jsx';

function Home() {
  return (
    <div className='Hero-section   '>
      <div className='relative text-white flex  '>
          <div className='absolute top-[100px] left-[100px]  w-[500px] space-y-10'>
            <h1 className='text-xl font-semibold'>Today's Quote</h1>
            <div className='text-5xl text-shadow-lg text-shadow-black mb-10'> <em>The one who never gives up wins.</em></div>
            <Link to='/Dashboard'>
              <button type="button" class="p-4 mt-[50px] text-white transition-transform duration-200 hover:scale-105 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-lg rounded-3xl font-bold text-2xl px-4  text-center ">Get Analysis</button>
            </Link>
          </div>
          <div className='absolute right-[200px] top-10'>
            <img src={homelogo} alt="Homepage Image" className='h-[500px]  '/>
          </div>
    </div>
    <div className='container mt-[500px] mx auto'></div>
   <Homecards></Homecards>
    
    </div>
    
  )
}

export default Home

