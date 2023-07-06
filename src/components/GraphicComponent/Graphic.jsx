import React from 'react';
import nutrivict from '../../images/nutrivict.jpeg';
import nonic2 from '../../images/nonic_post2.png';
import nonic3 from '../../images/nonic_post7.jpeg';
import cycling from '../../images/cocycling.jpeg';

const Graphic = () => {
  return (<>      
    <h2 className="text-3xl font-bold uppercase mb-3 text-center">Happy Clients</h2>
    <div className='flex flex-wrap gap-3 justify-center'>
        <img src={nutrivict} alt="nutrivict" />
        <img src={nonic2} alt="nonic2" />
        <img src={nonic3} alt="nonicc3" />
        <img src={cycling} alt="cycling" />
    </div>
    </>
  )
}

export default Graphic