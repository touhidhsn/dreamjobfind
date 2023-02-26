import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='container m-auto'>
      <div className=' p-20 bg-primary rounded-lg gap-12 grid grid-cols-5 m-auto items-center justify-center'>
        <div>
          <div className='grid-1'>
            <h1 className='text-white text-2xl pb-6'>
              <strong>Dream</strong> Job
            </h1>
          </div>
          <p className='text-white pb-3 opacity-70 leading-7 text-sm'>
            We always make our seekers and companies find the best jobs and
            employers find the best candidates.
          </p>
        </div>
        <div>
          <div>
            <div>
              <h1 className='text-2xl text-white pb-8'>
                <strong>Resources</strong>
              </h1>
            </div>
            <div>
              <div className='text-white text-sm pb-2'>About us</div>

              <div className='text-white text-sm pb-2'>Features</div>

              <div className='text-white text-sm pb-2'>Newss</div>

              <div className='text-white text-sm pb-2'>FAQ</div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1 className='text-2xl text-white pb-8'>
              <strong>Fetures</strong>
            </h1>
          </div>
          <div>
            <div className='text-white text-sm pb-2'>About us</div>

            <div className='text-white text-sm pb-2'>Features</div>

            <div className='text-white text-sm pb-2'>Newss</div>

            <div className='text-white text-sm pb-2'>FAQ</div>
          </div>
        </div>
        <div>
          <div>
            <h1 className='text-2xl text-white pb-8'>
              <strong>Company</strong>
            </h1>
          </div>
          <div>
            <div className='text-white text-sm pb-2'>About us</div>

            <div className='text-white text-sm pb-2'>Features</div>

            <div className='text-white text-sm pb-2'>Newss</div>

            <div className='text-white text-sm pb-2'>FAQ</div>
          </div>
        </div>
        <div>
          <h1 className='text-2xl text-white'>
            {" "}
            <strong>Social</strong> Links
          </h1>
          <div className='flex gap-1 text-white'>
            <h1 className='text-white p-2 text-xl'>
              <FaFacebook />
            </h1>
            <h1 className='text-white p-2 text-xl'>
              <FaTwitter />
            </h1>
            <h1 className='text-white p-2 text-xl'>
              <FaLinkedin />
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
