'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeIn } from '../../../variants';

const cars = [
  {
    type: 'Hatchback',
    name: 'Ford Focus',
    price: 29,
    stars: 3.5,
    image: '/assets/images/carSlider/car04.png',
    info: [
      {
        icon: 'assets/icons/carSlider/gearshift.svg',
        text: 'Manual',
      },
      {
        icon: 'assets/icons/carSlider/seat.svg',
        text: '5 Seats',
      },
      {
        icon: 'assets/icons/carSlider/gas.svg',
        text: 'Gas',
      },
      {
        icon: 'assets/icons/carSlider/engine.svg',
        text: '1600 HP',
      },
      {
        icon: 'assets/icons/carSlider/wheel.svg',
        text: 'Front',
      },
    ],
  },
  {
    type: 'Sedan',
    name: 'Toyota Corolla',
    price: 25,
    stars: 5,
    image: 'assets/images/carSlider/car02.svg',
    info: [
      {
        icon: 'assets/icons/carSlider/gearshift.svg',
        text: 'Manual',
      },
      {
        icon: 'assets/icons/carSlider/seat.svg',
        text: '5 Seats',
      },
      {
        icon: 'assets/icons/carSlider/gas.svg',
        text: 'Gas',
      },
      {
        icon: 'assets/icons/carSlider/engine.svg',
        text: '1600 HP',
      },
      {
        icon: 'assets/icons/carSlider/wheel.svg',
        text: 'Front',
      },
    ],
  },
  {
    type: 'SUV',
    name: 'Honda CR-V',
    price: 35,
    stars: 4.6,
    image: 'assets/images/carSlider/car03.svg',
    info: [
      {
        icon: 'assets/icons/carSlider/gearshift.svg',
        text: 'Automatic',
      },
      {
        icon: 'assets/icons/carSlider/seat.svg',
        text: '5 Seats',
      },
      {
        icon: 'assets/icons/carSlider/gas.svg',
        text: 'Gas',
      },
      {
        icon: 'assets/icons/carSlider/engine.svg',
        text: '1600 HP',
      },
      {
        icon: 'assets/icons/carSlider/wheel.svg',
        text: 'Front',
      },
    ],
  },
  {
    type: 'Convertible',
    name: 'Mazda MX-5',
    price: 32,
    stars: 4.9,
    image: 'assets/images/carSlider/car01.svg',
    info: [
      {
        icon: 'assets/icons/carSlider/gearshift.svg',
        text: 'Automatic',
      },
      {
        icon: 'assets/icons/carSlider/seat.svg',
        text: '5 Seats',
      },
      {
        icon: 'assets/icons/carSlider/gas.svg',
        text: 'Gas',
      },
      {
        icon: 'assets/icons/carSlider/engine.svg',
        text: '1600 HP',
      },
      {
        icon: 'assets/icons/carSlider/wheel.svg',
        text: 'Front',
      },
    ],
  },
];

const CarSlider = () => {

  const renderStars = (stars) => {
    const fullStars = Math.floor(stars);
    const halfStar = stars % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  
    return (
      <>
        {Array(fullStars).fill(<FaStar className='text-accent' />)}
        {halfStar && <FaStarHalfAlt className='text-accent' />}
        {Array(emptyStars).fill(<FaRegStar className='text-white' />)}
      </>
    );
  };

  return (
    <motion.div 
      variants={fadeIn('up', 0.4)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.2 }}
      className='container mx-auto'
    >
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          1260: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }}
      >
        {cars.map((car, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='mx-auto max-w-[385px] sm:mx-0'>
                <Image 
                  src={car.image}
                  alt=''
                  width={380}
                  height={284}
                />
                <div className='flex justify-between'>
                  <div>
                    <div className='text-[13px] text-secondary uppercase'>
                      {car.type}
                    </div>
                    <h3 className='text-lg uppercase font-bold'>{car.name}</h3>
                    <div className='mb-10 text-accent font-semibold uppercase'>${car.price} /day</div>
                  </div>
                  <div className='flex gap-x-2 h-max'>
                    {renderStars(car.stars)}
                  </div>
                </div>
                <div className='flex gap-x-3 xl:gap-x-4 w-max mb-10'>
                  {car.info.map((item, index) => {
                    return (
                      <div key={index} className='flex flex-col items-center'>
                        <div className='bg-primary w-10 h-10 rounded-full flex justify-center items-center mb-2'>
                          <Image 
                            src={item.icon}
                            alt=''
                            width={22}
                            height={22}
                          />
                        </div>
                        <div className='text-[12px] uppercase'>
                          {item.text}
                        </div>
                      </div>
                    )
                  })}
                </div>
                <button className='btn btn-accent btn-lg'>See details</button>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </motion.div>
  )
}

export default CarSlider
