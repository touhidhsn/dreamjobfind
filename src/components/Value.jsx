import React from "react";
import { BsUnion } from "react-icons/bs";
import { SlEnergy } from "react-icons/sl";
import { HiDocumentText } from "react-icons/hi";

const Value = () => {
  return (
    <section className='container mx-auto'>
      <div className='mt-24 mb-16'>
        <h1 className='text-textColor text-2xl pt-8 pb-12 font-bold block w-1/2'>
          The value that holds us true and to account
        </h1>
        <div className='grid gap-40 grid-cols-3 items-center'>
          <div className='p-5 singleGrid rounded-xl hover:bg-blue-100'>
            <div className='flex items-center gap-3'>
              <div className='rounded-xl bg-[#dedef8] h-10 w-10 flex items-center justify-center'>
                <BsUnion className='text-3xl text-orange-400 w-2/3' />
              </div>
              <span className='font-semibold text-textColor text-lg'>
                Simplicity
              </span>
            </div>
            <p className='text-textColor text-sm opacity-70 py-4'>
              Things being made beautiful are aat the heart of everything we do!
            </p>
          </div>

          <div className='p-5 singleGrid rounded-xl hover:bg-[#FFFFE0]'>
            <div className='flex items-center gap-3'>
              <div className='rounded-xl bg-yellow-200 h-10 w-10 flex items-center justify-center'>
                <SlEnergy className='text-3xl text-yellow-800 w-2/3' />
              </div>
              <span className='font-semibold text-textColor text-lg'>
                Creative
              </span>
            </div>
            <p className='text-textColor text-sm opacity-70 py-4'>
              Things being made beautiful are aat the heart of everything we do!
            </p>
          </div>

          <div className='p-5 singleGrid rounded-xl hover:bg-[#ffeee0]'>
            <div className='flex items-center gap-3'>
              <div className='rounded-xl bg-orange-200 h-10 w-10 flex items-center justify-center'>
                <HiDocumentText className='text-3xl text-orange-800 w-2/3' />
              </div>
              <span className='font-semibold text-textColor text-lg'>
                Unique
              </span>
            </div>
            <p className='text-textColor text-sm opacity-70 py-4'>
              Things being made beautiful are aat the heart of everything we do!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
