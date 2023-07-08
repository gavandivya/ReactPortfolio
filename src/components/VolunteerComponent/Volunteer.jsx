import React from 'react';
import { Carousel } from "@material-tailwind/react";
import b1 from "../../images/b1.png";
import b2 from "../../images/b3.png";
import b3 from "../../images/b6.png";
import b4 from "../../images/b4.png";


const Volunteer = () => {
  return (
    <>
    <h2 className="text-3xl font-bold uppercase mb-3 text-center">Volunteer Experience</h2>
    <div className='flex gap-2 flex-wrap lg:!flex-nowrap'>
    <Carousel transition={{ duration: 2 }} className="rounded-xl">
      <img 
        src={b1}
        alt="image1"
        className="w-full h-full object-cover"
      />
      <img 
        src={b2}
        alt="image2"
        className=" w-full h-full object-cover"
      />
      <img
        src={b3}
        alt="image3"
        className="w-full h-full object-cover"
      />
        <img
        src={b4}
        alt="image4"
        className="  w-full h-full object-cover"
      />
    </Carousel>
    <div className='p-2'>
    <p><strong>DATE WITH OCEAN</strong></p>
    <p>
        Along with the well known socialist Afroz Shah and our
        college, I worked as a Beach Cleaning Volunteer under the
        name (SEVA Activity) for 30 hours, where we cleaned the
        Dana Pani Beach and Mitthi River in Mumbai on every
        Sundays and Saturdays.
    </p>
    <p>
        We also made the people leaving in the vicinity aware of
        the harmful effects of throwing plastic into the water
        bodies.The overall experience was a path way to learn new
        things and help people know about the side effects of
        harming our environment.
    </p>
    <p className='font-bold'>Objectives</p>
    <ol>
        <li>1) Save the marine animals.</li>
        <li>2) Beat, Plastic Pollution.</li>
    </ol>
    </div>    </div>
    </>
  )
}

export default Volunteer