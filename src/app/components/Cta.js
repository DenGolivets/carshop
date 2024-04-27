'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../../../variants";

const Cta = () => {
  return (
    <section className="pt-24 xl:pt-48 flex items-end pb-0 bg-[#b2b7c2]/10 overflow-hidden" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row xl:items-center">
          <div className="flex-1 xl:ml-24 text-center md:text-left mb-12 md:mb-0">
            <div className="max-w-[520px] mx-auto order-2 xl:order-none">
              <motion.h2 
                variants={fadeIn('right', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
                className="h2"
              >
                Download our App now and hit the road with ease.
              </motion.h2>
              <motion.p
                variants={fadeIn('right', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-10"
              >
                Nostrud excepteur nisi proident veniam officia tempor excepteur labore voluptate pariatur. 
                Cillum sint ipsum aliqua ullamco non in dolore dolore pariatur. 
              </motion.p>
              <motion.div 
                variants={fadeIn('right', 0.6)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
                className="flex gap-x-3 justify-center md:justify-start"
              >
                <button className="btn-cta">
                  <Image 
                    src={'/assets/icons/buttons/google-play.svg'} 
                    alt="" 
                    width={132}
                    height={36}
                  />
                </button>
                <button className="btn-cta">
                  <Image 
                    src={'/assets/icons/buttons/app-store.svg'} 
                    alt="" 
                    width={132}
                    height={36}
                  />
                </button>
              </motion.div>
            </div>
          </div>
          <motion.div 
            variants={fadeIn('left', 0.8)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 flex justify-center order-1 md:order-1 relative"
          >
            <Image 
              src={'/assets/images/cta/phone2.png'}
              alt=""
              width={320}
              height={640}
              className="z-[2]"
            />
            <Image 
              src={'/assets/images/cta/Screen2.jpg'}
              alt=""
              width={295}
              height={610}
              className="absolute top-4 rounded-[20px] z-[1]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Cta
