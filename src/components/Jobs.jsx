import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { jobsData } from "../data";
const Jobs = () => {
  return (
    <section className='container mx-auto'>
      <div className='flex gap-10 justify-center flex-wrap items-center py-10 mx-12'>
        {jobsData.map((joblist, index) => {
          const { image, title, time, location, desc, company } = joblist;
          return (
            <div
              key={index}
              className='group group/item w-64 p-5 bg-white rounded-lg hover:bg-primary shadow-lg shadow-gray-300 hover:shadow-xl'>
              <span className='flex justify-between items-center gap-4'>
                <h1 className='font-semibold text-base text-textColor group-hover:text-white'>
                  {title}
                </h1>
                <span className='flex items-center text-gray-300 gap-1 text-sm'>
                  <BiTimeFive /> {time}
                </span>
              </span>
              <h6 className='text-gray-300 text-sm'>{location}</h6>
              <p className='text-textColor text-sm pt-5 mt-5 border-t-2 group-hover:text-white'>
                {desc}
              </p>
              <div className='flex items-center gap-2'>
                <img src={image} alt='Company Logo' className='w-2/12' />
                <span className='block text-sm py-4 group-hover:text-white'>
                  {company}
                </span>
              </div>
              <button className='font-semibold border-2 rounded-lg block p-4 w-full text-sm text-textColor bg-gray-100 hover:bg-white group-hover:text-gray-700 group-hover/item:text-textColor'>
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Jobs;
