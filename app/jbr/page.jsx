'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import { FaLongArrowAltDown } from "react-icons/fa";
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';
import { useAppContext } from '../context';
import jbrTrans from '../translation/jbrTrans.js';

const jbrImages = [
  { image: '/jbr/jb1.jpg' },
  { image: '/jbr/jb2.jpg' },
  { image: '/jbr/jb3.jpg' },
  { image: '/jbr/jb4.jpg' },
  { image: '/jbr/jb5.jpg' },
  { image: '/jbr/jb6.jpg' },
  { image: '/jbr/jb7.jpg' },
  { image: '/jbr/jb8.jpg' },
];

const Page = () => {
  const  [ language ] = useAppContext(); // Access the current language
  const t = jbrTrans[language]; // Get translations based on language

  return (
    <div className='mt-20 px-5 xl:px-10'>
      <div className='flex flex-col justify-center text-center items-center'>
        <h2 className='text-orange mt-20 mbp-10'>
          {t.title}
        </h2>
        <p className='text-white'>
          {t.description}
        </p>
        <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8 mt-10">
          {jbrImages.map((item, index) => (
            <motion.div
              variants={fadeIn("left", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              key={index}
              className="relative group overflow-hidden rounded-lg"
            >
              <Image
                src={item.image}
                alt={`jbr image ${index}`}
                width={1080}
                height={1080}
                className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105  mt-5"
              />
            </motion.div>
          ))}
        </div>
        <div className='flex flex-col justify-center items-center my-20 text-white gap-5'>
          <h2 className='text-white'>
            {t.lets_meat}
          </h2>
          <FaLongArrowAltDown className='text-4xl' />
          <h2 className='underline'>
            <Link target='_blank' href={'https://maps.app.goo.gl/cNBPgSUiT8mog4HFA'}>
              <Button className='w-30' variant='orange'>{t.get_directions}</Button>
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Page;