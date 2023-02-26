import React from "react";
import { searchData } from "../data.js";
import { searchShortData } from "../data.js";
import { searchTypeData } from "../data.js";
import { searchPositionData } from "../data.js";

const Search = () => {
  return (
    <div className='container mx-auto'>
      <div className='grid gap-10 bg-grayBackground rounded-xl p-12 '>
        <form action=''>
          <div className='flex justify-between items-center rounded-xl gap-3 bg-white p-5 shadow-lg shadow-gray-300'>
            {searchData.map((items) => {
              const { icon, placeholder, close } = items;
              return (
                <div className='flex gap-6 items-center'>
                  <div className='text-[25px] icon'>{icon}</div>
                  <input
                    type='text'
                    className='bg-transparent text-orange-300 focus:outline-none w-full'
                    placeholder={placeholder}
                  />
                  <div className='text-[20px] text-[#a5a6a6] hover:text-textColor icon'>
                    {close}
                  </div>
                </div>
              );
            })}
            <button className='bg-primary text-white px-5 py-2 rounded-md font-xl cursor-pointer hover:bg-blue-500'>
              Search
            </button>
          </div>
        </form>

        <div className='flex items-center justify-center gap-10 '>
          <div className='flex items-center gap-2'>
            <label htmlFor='' className='text-[#808080] font-semibold'>
              Short By:
            </label>
            <select name='' id='' className='bg-white rounded-sm px-4 py-1'>
              {searchShortData.map((shorts) => {
                const { value, shortName } = shorts;
                return <option value={value}>{shortName}</option>;
              })}
            </select>
          </div>

          <div className='flex items-center gap-2'>
            <label htmlFor='' className='text-[#808080] font-semibold'>
              Type:
            </label>
            <select name='' id='' className='bg-white rounded-sm px-4 py-1'>
              {searchTypeData.map((types) => {
                const { value, typeName } = types;
                return <option value={value}>{typeName}</option>;
              })}
            </select>
          </div>

          <div className='flex items-center gap-2'>
            <label htmlFor='' className='text-[#808080] font-semibold'>
              Short By:
            </label>
            <select name='' id='' className='bg-white rounded-sm px-4 py-1'>
              {searchPositionData.map((positoins) => {
                const { value, positionName } = positoins;
                return <option value={value}>{positionName}</option>;
              })}
            </select>
          </div>
          <span className='text-[#a1a1a1] cursor-pointer'>Clear All</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
