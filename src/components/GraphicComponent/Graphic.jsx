import React from 'react';
import nutrivict from '../../images/nutrivict.jpeg';
import nonic2 from '../../images/nonic_post2.png';
import nonic3 from '../../images/nonic_post7.jpeg';
import cycling from '../../images/cocycling.jpeg';
import "./Graphic.css"

const Graphic = () => {
  return (<>      
    <h2 className="text-3xl font-bold uppercase mb-3 text-center">Happy Clients</h2>
    <div className='flex flex-wrap gap-2 justify-center'>
        <img className='graphicImg'  src={nutrivict} alt="nutrivict" />
        <img className='graphicImg' src={nonic2} alt="nonic2" />
        <img className='graphicImg' src={nonic3} alt="nonicc3" />
        <img className='graphicImg' src={cycling} alt="cycling" />
    </div>
    </>
  )
}

export default Graphic