import React from 'react';

// Routing
import { Link } from 'react-router';

// Components
import CategoryTitle from '@/components/shared/CategoryTitle.js';

// Assets
import playstationImage from '@/assets/img/playstation.png';
import womenImage from '@/assets/img/women.png';
import gucciImage from '@/assets/img/gucci.png';
import speakersImage from '@/assets/img/speakers.png';

function NewArrival() {
  return (
    <div className="mt-36">
      <div className="customContainer">
        <CategoryTitle title="Featured" />
        <p className="text-2xl lg:text-4xl font-medium mt-5">Flash Sales</p>

        <div>

          <div>

          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-14 text-white ">

            <div className="bg-black p-8 relative overflow-hidden h-[300px] lg:h-auto">
              <img src={playstationImage} alt="playstationImage" className="absolute right-8 bottom-0" />
              <div className="absolute bottom-8">
                <p className="sm:text-[24px] text-base font-semibold">PlayStation 5</p>
                <p className="mt-4 sm:text-sm text-[10px] font-normal">Black and White version of the PS5 coming out on sale.</p>
                <Link to="/products">
                  <p className="sm:text-base text-[12px] font-medium border-b inline-block">Shop Now</p>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="bg-black p-6 relative h-[300px] overflow-hidden">
                <img src={womenImage} alt="womenImage" className="absolute right-8 bottom-0" />
                <div className="absolute bottom-8">
                  <p className="sm:text-[24px] text-base font-semibold">Women’s Collections</p>
                  <p className="mt-4 sm:text-sm text-[10px] font-normal">Featured woman collections that give you another vibe.</p>
                  <Link to="/products">
                    <p className="sm:text-base text-[12px] font-medium border-b inline-block">Shop Now</p>
                  </Link>
                </div>
              </div>

              <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-7">

                <div className="bg-black sm:basis-6/12 h-[300px] p-6 relative overflow-hidden">
                  <img src={speakersImage} alt="speakersImage" className="absolute right-8 bottom-0" />
                  <div className="absolute bottom-8">
                    <p className="sm:text-[24px] text-base font-semibold">Speakers</p>
                    <p className="mt-4 sm:text-sm text-[10px] font-normal">Amazon wireless speakers</p>
                    <Link to="/products">
                      <p className="sm:text-base text-[12px] font-medium border-b inline-block">Shop Now</p>
                    </Link>
                  </div>
                </div>

                <div className="bg-black sm:basis-6/12 h-[300px] p-6 relative overflow-hidden">
                  <img src={gucciImage} alt="gucciImage" className="absolute right-8 bottom-0"/>
                  <div className="absolute bottom-8">
                    <p className="sm:text-[24px] text-base font-semibold">Perfume</p>
                    <p className="mt-4 sm:text-sm text-[10px] font-normal">GUCCI INTENSE OUD EDP</p>
                    <Link to="/products">
                      <p className="sm:text-base text-[12px] font-medium border-b inline-block">Shop Now</p>
                    </Link>
                  </div>
                </div>
              </div>

            </div>

          </div>


        </div>
      </div>
    </div>
  );
}

export default NewArrival;